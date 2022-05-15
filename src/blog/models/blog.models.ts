import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Blog {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
