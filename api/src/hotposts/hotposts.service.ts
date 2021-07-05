import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Usuario } from './entities/user.entity';

@Injectable()
export class HotPostsService {
  constructor(
    @InjectRepository(Post)
    private PostRepository: Repository<Post>,
  ) {}
  private postsUsuario(nome: string, posts: Post[]): Post[] {
    return posts.filter((elem) => elem.autor == nome);
  }
  private contarUpsPorUsuario(nome: string, posts: Post[]) {
    return posts
      .filter((elem) => elem.autor == nome)
      .map((elem) => elem.ups)
      .reduce((prev, elem) => prev + elem);
  }
  private contarTotalComentariosEmPostsDeUsuario(nome: string, posts: Post[]) {
    return posts
      .filter((elem) => elem.autor == nome)
      .map((elem) => elem.num_comentarios)
      .reduce((prev, elem) => prev + elem);
  }
  private ordenarUpsOuNumComentariosPorPosts(
    orderby: 'ups' | 'num_comentarios',
    dados: Post[],
  ) {
    if (orderby == 'ups') {
      return dados.sort((a, b) => b.ups - a.ups);
    }
    if (orderby === 'num_comentarios') {
      return dados.sort((a, b) => b.num_comentarios - a.num_comentarios);
    }
  }
  private ordernarUsuarioPorNumPostsOuTotalNumComentarios(
    orderby: 'ups' | 'total_coments_posts',
    usuarios: Usuario[],
  ) {
    if (orderby == 'ups') {
      return usuarios.sort((a, b) => b.ups - a.ups);
    }
    if (orderby === 'total_coments_posts') {
      return usuarios.sort(
        (a, b) => b.total_coments_posts - a.total_coments_posts,
      );
    }
  }
  private async buscarUltimoLoteDeDados(): Promise<string> {
    const lote: Post[] = await this.PostRepository.query(`
        select top(1) * from [reddithot].[dbo].[HotPost]
        order by data_obtido desc
    `);
    return lote[0].uuid_insercao;
  }
  async buscarUsuarios(
    orderby: 'ups' | 'total_coments_posts',
  ): Promise<Usuario[]> {
    const lote = await this.buscarUltimoLoteDeDados();
    const _Posts = await this.PostRepository.createQueryBuilder('HotPost')
      .where(`HotPost.uuid_insercao = :lote`, { lote: lote })
      .getMany();
    const users = _Posts.map((x) => x.autor);
    const lista_usuarios_nome = [...new Set(users)];
    const data = lista_usuarios_nome.map(
      async (nome) =>
        new Usuario({
          nome: nome,
          ups: this.contarUpsPorUsuario(nome, _Posts),
          total_coments_posts: this.contarTotalComentariosEmPostsDeUsuario(
            nome,
            _Posts,
          ),
          posts: this.postsUsuario(nome, _Posts),
        }),
    );
    const data_resolvida = await Promise.all(data);
    return this.ordernarUsuarioPorNumPostsOuTotalNumComentarios(
      orderby,
      data_resolvida,
    );
  }
  async buscarPosts(
    datainicio: Date,
    datafim: Date,
    orderby: 'ups' | 'num_comentarios' = 'ups',
  ): Promise<Post[]> {
    const inicio = datainicio.getTime() / 1000;
    const fim = datafim.getTime() / 1000;
    const lote: string = await this.buscarUltimoLoteDeDados();
    const dados = await this.PostRepository.createQueryBuilder('HotPost')
      .where(
        'HotPost.uuid_insercao = :datalote  and timestamp >= :inicio and timestamp <= :fim',
        {
          datalote: lote,
          inicio: inicio,
          fim: fim,
        },
      )
      .getMany();
    return this.ordenarUpsOuNumComentariosPorPosts(orderby, dados);
  }
}
