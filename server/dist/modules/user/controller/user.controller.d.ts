import { UserService } from "../services/user.service";
import { UserRegisterRequestDto } from "../dto/user-register-req.dto";
import { User } from "../entities/user.entity";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>;
}
