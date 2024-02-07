import { IsEmail, IsNotEmpty, Length, MATCHES, Matches } from "class-validator";
import { MESSAGES, REGEX } from "src/app.utils";

export class UserRegisterRequestDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8,24)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    @Matches(REGEX.PASSWORD_RULE,{
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    password: string;

    @IsNotEmpty()
    @Length(8,24)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    @Matches(REGEX.PASSWORD_RULE,{
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    confirm: string;
}