import { Field, InputType, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlogDto {
  @Field()
  title: string;

  @Field({ nullable: true })
  content: string;
}
