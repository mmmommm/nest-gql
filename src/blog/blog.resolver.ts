import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Blog } from './models/blog.models';
import { BlogService } from './blog.service';

@Resolver()
export class BlogResolver {
  constructor(private blogService: BlogService) {}
  @Query(() => [Blog], { nullable: 'items' })
  findAll() {
    return this.blogService.findAll();
  }

  @Query(() => Blog)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.blogService.findOneById(id);
  }
}
