import { Post } from './post.entity';
export declare class Usuario {
    constructor(data?: {
        nome: string;
        ups: number;
        total_coments_posts: number;
        posts?: Post[];
    });
    nome: string;
    posts?: Post[];
    ups: number;
    total_coments_posts: number;
}
