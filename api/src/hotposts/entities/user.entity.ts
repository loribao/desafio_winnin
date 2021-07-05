import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
export class Usuario {
  constructor(
    data: {
      nome: string;
      ups: number;
      total_coments_posts: number;
      posts?: Post[];
    } = null,
  ) {
    if (data) {
      this.nome = data.nome ? data.nome : '';
      this.ups = data.ups ? data.ups : 0;
      this.posts = data.posts ? data.posts : [];
      this.total_coments_posts = data.total_coments_posts
        ? data.total_coments_posts
        : 0;
    }
  }
  @Field(() => String, { description: 'Nome do usuario' })
  nome: string;
  @Field(() => [Post], { description: 'Posts do usuario', nullable: true })
  posts?: Post[];
  @Field(() => Int, {
    description: 'Numero total de ups no total de postagens',
  })
  ups: number;
  @Field(() => Int, { description: 'Numero de postagens' })
  total_coments_posts: number;
}
