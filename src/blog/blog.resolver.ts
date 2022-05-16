import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Blog } from './models/blog.models';
import { BlogService } from './blog.service';
import { NotFoundException } from '@nestjs/common';

@Resolver((of) => Blog)
export class BlogResolver {
  constructor(private blogService: BlogService) {}
  @Query((returns) => [Blog])
  async blogs(): Promise<Blog[]> {
    return await this.blogService.findAll();
  }

  @Query((returns) => Blog)
  async getBlog(@Args({ name: 'id', type: () => Int }) id: number) {
    const blog = await this.blogService.findOneById(id);
    if (!blog) {
      throw new NotFoundException(id);
    }
    return blog;
  }

  @Mutation((returns) => Boolean)
  async removeBlog(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.blogService.remove(id);
  }
}
