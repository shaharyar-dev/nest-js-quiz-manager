"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const CreateQuiz_dto_1 = require("../dto/CreateQuiz.dto");
const quiz_service_1 = require("../services/quiz.service");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }
    async getQuizById(id) {
        return await this.quizService.getQuizById(id);
    }
    async createQuiz(quizData) {
        return await this.quizService.createNewQuiz(quizData);
    }
};
exports.QuizController = QuizController;
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "getAllQuiz", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "getQuizById", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateQuiz_dto_1.CreateQuizDto]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "createQuiz", null);
exports.QuizController = QuizController = __decorate([
    (0, common_1.Controller)('quiz'),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
//# sourceMappingURL=quiz.controller.js.map