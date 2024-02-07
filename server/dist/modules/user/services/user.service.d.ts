import { UserRegisterRequestDto } from "../dto/user-register-req.dto";
import { User } from "../entities/user.entity";
export declare class UserService {
    doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>;
}
