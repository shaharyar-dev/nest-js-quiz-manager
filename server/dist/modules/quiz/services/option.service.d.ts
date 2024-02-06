import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "../dto/CreateOption.dto";
import { Question } from "../entities/question.entity";
export declare class OptionService {
    private optionRepository;
    constructor(optionRepository: Repository<Option>);
    createOption(option: CreateOptionDto, question: Question): Promise<{
        text: string;
        isCorrect: boolean;
    } & Option>;
}
