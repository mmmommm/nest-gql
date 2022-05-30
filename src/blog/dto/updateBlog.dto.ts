import { Field, ID, InputType, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBlogDto {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;
}
