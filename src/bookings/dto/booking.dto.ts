import{IsNotEmpty, IsOptional, IsString} from "class-validator"
export class BookingDto{
    @IsNotEmpty()
     id:number
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    desc:string
    
    @IsOptional()
    StartDate:Date

    @IsOptional()
    EndDate:Date

    @IsNotEmpty()
    userId:number

}