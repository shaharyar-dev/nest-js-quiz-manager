import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";


@Injectable()
export class QuizService {
  // constructor (@InjectRepository(QuizRepository) private quizRepository: QuizRepository) {

  // }

  constructor (@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) {

  }

  async getAllQuiz()
  {
    // return [1,2,3,4,'Service'];
    return await this.quizRepository.find(); 
  }

  async getQuizById(id: number) : Promise<Quiz>
  {
    return await this.quizRepository.findOne({where:{id:id},relations:["questions"]}); 
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }
}