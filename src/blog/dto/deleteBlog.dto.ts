import { Field, ID, InputType, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteBlogDto {
  @Field(() => ID)
  id: string;
}
