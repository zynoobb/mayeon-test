import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, Length } from 'class-validator';
import { NoWhitespace } from 'src/common/filter/custom-class-validator';

@InputType()
export class CreateChoiceInput {
  @Field(() => Int)
  @IsNumber()
  surveyId: number;

  @Field(() => Int)
  @IsNumber()
  questionId: number;

  @Field(() => String)
  @Length(1, 300)
  @NoWhitespace()
  choiceContent: string;

  @Field(() => Int)
  @IsNumber()
  choiceScore: number;
}
