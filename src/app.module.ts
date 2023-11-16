import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { TestResolver } from './test.resolver';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UsersModule } from './apis/users/users.module';
import { SurveysModule } from './apis/surveys/surveys.module';
import { QuestionsModule } from './apis/questions/questions.module';
import { ChoicesModule } from './apis/choices/choices.module';

@Module({
  imports: [
    TestResolver,
    UsersModule,
    SurveysModule,
    QuestionsModule,
    ChoicesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot(typeORMConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
