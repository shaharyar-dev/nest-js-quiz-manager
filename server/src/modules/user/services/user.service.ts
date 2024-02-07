import { Injectable } from "@nestjs/common";
import { UserRegisterRequestDto } from "../dto/user-register-req.dto";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";


@Injectable()
export class UserService {
    async doUserRegistration(userRegister: UserRegisterRequestDto,) : Promise<User> {
        const salt = await bcrypt
        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = userRegister.password;
        return await user.save();
    }
}