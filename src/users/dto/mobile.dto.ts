import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class mobileDto{
    @IsString()
    @IsNotEmpty()
    mobile: string;
}

export class mobileOtpDto{
    @IsString()
    @IsNotEmpty()
    otp: string;

    @IsString()
    @IsNotEmpty()
    mobile: string;
}