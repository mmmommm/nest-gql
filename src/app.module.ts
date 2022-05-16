import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { BlogModule } from './blog/blog.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/models/blog.models';
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // schemaファイルのパスを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 生成されたschemaを自動でsortされるためのオプションをオンにする
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_gql',
      entities: [Blog],
      synchronize: true,
    }),
    BlogModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
