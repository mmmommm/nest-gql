import { Injectable } from '@nestjs/common';
import { NewBlogInput } from './dto/newBlog.input';
import { Blog } from './models/blog.models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/createBlog.dto';
import { Blog } from './models/blog.models';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  findOneById(id: number): Promise<Blog> {
    return this.blogRepository.findOne(id);
  }

  async create(data: NewBlogInput): Promise<Blog> {
    const blog = this.blogRepository.create(data);
    await this.blogRepository.save(blog);
    return blog;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.blogRepository.delete(id);
    return result.affected > 0;
  }

  create(createBlogDto: CreateBlogDto): Blog {
    const newBlog = {
      ...CreateBlogDto,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogs.push(newBlog);
    return newBlog;
  }
}
