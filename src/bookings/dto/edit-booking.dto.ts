import{IsNotEmpty, IsOptional, IsString} from "class-validator"
export class EditBookingDto{
    @IsNotEmpty()
     id:number

    @IsString()
    @IsOptional()
    title:string

    @IsString()
    @IsOptional()
    desc:string
    
    @IsOptional()
    StartDate:Date

    @IsOptional()
    EndDate:Date
  
    @IsNotEmpty()
    userId:number
}