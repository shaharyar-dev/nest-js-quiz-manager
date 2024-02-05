import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { QuizService } from "../services/quiz.service";
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(): Promise<import("../entities/quiz.entity").Quiz[]>;
    getQuizById(id: number): Promise<import("../entities/quiz.entity").Quiz>;
    createQuiz(quizData: CreateQuizDto): Promise<CreateQuizDto & import("../entities/quiz.entity").Quiz>;
}
