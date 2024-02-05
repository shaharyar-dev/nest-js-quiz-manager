import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";
export declare class QuestionService {
    private questionRepository;
    constructor(questionRepository: Repository<Question>);
    createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>;
}
