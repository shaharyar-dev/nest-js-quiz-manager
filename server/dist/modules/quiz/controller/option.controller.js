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
exports.OptionController = void 0;
const common_1 = require("@nestjs/common");
const option_service_1 = require("../services/option.service");
const question_service_1 = require("../services/question.service");
const CreateOption_dto_1 = require("../dto/CreateOption.dto");
let OptionController = class OptionController {
    constructor(optionService, questionService) {
        this.optionService = optionService;
        this.questionService = questionService;
    }
    async saveOptionToQuestion(createOption) {
        const question = await this.questionService.findQuestionById(createOption.questionId);
        const option = await this.optionService.createOption(createOption, question);
        return { question, createOption, option };
    }
};
exports.OptionController = OptionController;
__decorate([
    (0, common_1.Post)("/"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOption_dto_1.CreateOptionDto]),
    __metadata("design:returntype", Promise)
], OptionController.prototype, "saveOptionToQuestion", null);
exports.OptionController = OptionController = __decorate([
    (0, common_1.Controller)('question/option'),
    __metadata("design:paramtypes", [option_service_1.OptionService, question_service_1.QuestionService])
], OptionController);
//# sourceMappingURL=option.controller.js.map