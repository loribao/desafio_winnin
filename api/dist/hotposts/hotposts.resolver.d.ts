import { HotPostsService } from './hotposts.service';
import { Post } from './entities/post.entity';
import { Usuario } from './entities/user.entity';
export declare class HotPostsResolver {
    private readonly HotPostsService;
    constructor(HotPostsService: HotPostsService);
    FindPostByRageDate(datainicio: Date, datafim: Date, orderby: 'ups' | 'num_comentarios'): Promise<Post[]>;
    ListUsuario(orderby: 'ups' | 'total_coments_posts'): Promise<Usuario[]>;
}
