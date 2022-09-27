import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingController } from "./booking.controller";
import { Booking } from "./booking.entity";
import { BookingService } from "./booking.service";


@Module({
    imports:[TypeOrmModule.forFeature([Booking]),JwtModule.register({})],
    controllers:[BookingController],
    providers:[BookingService],
    exports:[BookingService]

})
export class BookingModule{}