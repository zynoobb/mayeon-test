import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Choice } from 'src/apis/choices/entites/choice.entity';
import { Question } from 'src/apis/questions/entites/question.entity';
import { Survey } from 'src/apis/surveys/entites/survey.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Answer {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  answerId: number;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Survey, (survey) => survey.surveyId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => Survey)
  @JoinColumn({ name: 'surveyId' })
  survey: Survey;

  @ManyToOne(() => Question, (question) => question.questionId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => Question)
  @JoinColumn({ name: 'questionId' })
  question: Question;

  @ManyToOne(() => Choice, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => Choice)
  @JoinColumn({ name: 'choiceId' })
  choice: Choice;
}
