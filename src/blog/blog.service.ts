import { Injectable } from '@nestjs/common';
import { Blog } from './models/blog.models';

@Injectable()
export class BlogService {
  private blogs: Blog[] = [];

  findAll(): Blog[] {
    return this.blogs;
  }

  findOneById(id: string): Blog {
    const result = this.blogs.find((blog) => blog.id === id);
    if (!result) {
      throw new Error('Blog not found');
    }
    return result;
  }
}
