import { Resolver, Query, Args } from '@nestjs/graphql';
import { HotPostsService } from './hotposts.service';
import { Post } from './entities/post.entity';
import { Usuario } from './entities/user.entity';

@Resolver(() => HotPostsResolver)
export class HotPostsResolver {
  constructor(private readonly HotPostsService: HotPostsService) {}
  @Query(() => [Post], { name: 'Posts' })
  async FindPostByRageDate(
    @Args('datainicio', {
      type: () => Date,
      description: 'Data da postagem, para pesquisar',
    })
    datainicio: Date,
    @Args('datafim', {
      type: () => Date,
      description: 'Data da postage, para pesquisar',
    })
    datafim: Date,
    @Args('ordenar', {
      type: () => String,
      defaultValue: 'ups',
      description: `ordenar por 'ups' ou 'num_comentarios'`,
    })
    orderby: 'ups' | 'num_comentarios',
  ): Promise<Post[]> {
    return this.HotPostsService.buscarPosts(datainicio, datafim, orderby);
  }

  @Query(() => [Usuario], { name: 'Usuarios' })
  async ListUsuario(
    @Args('ordenar', {
      type: () => String,
      defaultValue: 'ups',
      description: `ordenar por 'ups' ou 'num_comentarios'`,
    })
    orderby: 'ups' | 'total_coments_posts',
  ): Promise<Usuario[]> {
    //this.PostsService.
    return await this.HotPostsService.buscarUsuarios(orderby);
  }
}
