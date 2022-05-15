import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { BlogModule } from './blog/blog.module';
import { ApolloDriver } from '@nestjs/apollo';
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // schemaファイルのパスを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 生成されたschemaを自動でsortされるためのオプションをオンにする
      sortSchema: true,
    }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
