import { Field, InputType, Int } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
@InputType()
export class NewBlogInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field((type) => Int)
  content: string;
}
