import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/CreateOption.dto";
export declare class OptionController {
    private optionService;
    private questionService;
    constructor(optionService: OptionService, questionService: QuestionService);
    saveOptionToQuestion(createOption: CreateOptionDto): Promise<{
        question: import("../entities/question.entity").Question;
        createOption: CreateOptionDto;
        option: {
            text: string;
            isCorrect: boolean;
        } & import("../entities/option.entity").Option;
    }>;
}
