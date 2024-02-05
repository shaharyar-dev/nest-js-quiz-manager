import { BaseEntity } from "typeorm";
import { Quiz } from "./quiz.entity";
export declare class Question extends BaseEntity {
    id: number;
    question: string;
    quiz: Quiz;
}
