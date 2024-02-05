import { Controller, Get, Param, ParseIntPipe, Post, HttpCode, UsePipes, ValidationPipe, Body } from "@nestjs/common";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { QuizService } from "../services/quiz.service";


@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService)
    {

    }

    @Get("/")
    getAllQuiz()
    {
        return this.quizService.getAllQuiz();
    }

    @Get("/:id")
    async getQuizById(@Param('id',ParseIntPipe) id: number)
    {
        return await this.quizService.getQuizById(id);
    }

    @Post("/")
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body()  quizData: CreateQuizDto)
    {
        // return quizData;
        // return {"data":quizData};
        return await this.quizService.createNewQuiz(quizData);
    }
}
