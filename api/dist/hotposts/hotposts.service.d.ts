import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Usuario } from './entities/user.entity';
export declare class HotPostsService {
    private PostRepository;
    constructor(PostRepository: Repository<Post>);
    private postsUsuario;
    private contarUpsPorUsuario;
    private contarTotalComentariosEmPostsDeUsuario;
    private ordenarUpsOuNumComentariosPorPosts;
    private ordernarUsuarioPorNumPostsOuTotalNumComentarios;
    private buscarUltimoLoteDeDados;
    buscarUsuarios(orderby: 'ups' | 'total_coments_posts'): Promise<Usuario[]>;
    buscarPosts(datainicio: Date, datafim: Date, orderby?: 'ups' | 'num_comentarios'): Promise<Post[]>;
}
