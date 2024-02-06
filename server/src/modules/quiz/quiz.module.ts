import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controller/quiz.controller';
import { QuestionController } from './controller/question.controller';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';

import { OptionController } from './controller/option.controller';
import { OptionService } from './services/option.service';

@Module({
    controllers: [QuizController,QuestionController,OptionController],
    providers: [QuizService,QuestionService,OptionService],
    imports: [TypeOrmModule.forFeature([Quiz,Question,Option])],
})
export class QuizModule {}
