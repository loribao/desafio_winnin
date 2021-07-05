import { Module } from '@nestjs/common';
import { HotPostsService } from './hotposts.service';
import { HotPostsResolver } from './hotposts.resolver';
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [HotPostsService, HotPostsResolver],
})
export class HotPostsModule {}
