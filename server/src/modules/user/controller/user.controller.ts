import { Body, Controller, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UserRegisterRequestDto } from "../dto/user-register-req.dto";
import { SETTINGS } from "src/app.utils";
import { User } from "../entities/user.entity";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }
    @Post('/register')
    async doUserRegistration(@Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto) : Promise<User> {
        return await this.userService.doUserRegistration(userRegister);
    }
}