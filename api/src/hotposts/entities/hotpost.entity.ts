import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from './post.entity';
import { Usuario } from './user.entity';

@ObjectType()
export class Hotpot {
  @Field(() => Usuario, {
    description: `Usuarios que postaram no reddit.com/r/artificial`,
  })
  public usuario: Usuario;
  @Field(() => Post, { description: `Postagem no reddit.com/r/artificial/hot` })
  public posts: Post;
}
