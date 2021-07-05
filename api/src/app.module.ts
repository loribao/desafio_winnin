import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HotPostsModule } from './hotposts/hotposts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './hotposts/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.dbhost || 'localhost',
      port: process.env.dbport ? parseInt(process.env.dbport) : 5000,
      database: process.env.database || 'reddithot',
      logging: false,
      entities: [Post],
      synchronize: false,
      options: {
        encrypt: false,
      },
      authentication: {
        type: 'default',
        options: {
          userName: process.env.user || 'sa',
          password: process.env.pass || 'Your_password123',
        },
      },
    }),
    GraphQLModule.forRoot({
      path: '/',
      introspection: true,
      playground: {
        workspaceName: 'Loribao Gonçalves Sanjinez',
        faviconUrl:
          'https://assets.website-files.com/600f14d617ea3d4f40ecfa21/600f14d617ea3db3f9ecfa76_Favicon.png',
        endpoint: '/',
        title: 'Winnin - desafio',
      },
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    HotPostsModule,
  ],
})
export class AppModule {}
