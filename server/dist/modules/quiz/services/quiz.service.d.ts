import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
export declare class QuizService {
    private quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    getAllQuiz(): Promise<Quiz[]>;
    getQuizById(id: number): Promise<Quiz>;
    createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto & Quiz>;
}
