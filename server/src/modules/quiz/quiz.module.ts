import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controller/quiz.controller';
import { QuestionController } from './controller/question.controller';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';

@Module({
    controllers: [QuizController,QuestionController],
    providers: [QuizService,QuestionService],
    imports: [TypeOrmModule.forFeature([Quiz,Question])],
})
export class QuizModule {}
