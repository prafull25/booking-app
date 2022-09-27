import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UnauthorizedException, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { userInfo } from "os";
import { JwtGuard } from "src/users/guard";
import { BookingService } from "./booking.service";
import { BookingDto, EditBookingDto } from "./dto";

@UseGuards(JwtGuard)
@Controller("booking")
export class BookingController {
    constructor(private bookingservice: BookingService, private jwt: JwtService) { }

    @Get()
    async AllBookings(@Req() req) {
        const cookie = req.cookies['jwt'];
        console.log(cookie);
        const data = await this.jwt.verifyAsync(cookie, { publicKey: 'jwt_secret_key' });
        if (!data) throw new UnauthorizedException();
        return this.bookingservice.getAllBookings(data['sub']);
    }
    @Post('add')
    async AddBookings(@Body() dto: BookingDto, @Req() req) {
        const cookie = req.cookies['jwt'];
        console.log(cookie);
        const data = await this.jwt.verifyAsync(cookie, { publicKey: 'jwt_secret_key' });
        if (!data) throw new UnauthorizedException();
        dto.userId = data['sub']; 
       return this.bookingservice.AddBooking(dto);

    }

    @Get(':id')
    async GetBookingById(@Param('id', ParseIntPipe) Id: number,) {
        return this.bookingservice.getBookingById(Id);
    }

    @Delete(':id')
    async DeleteBookingById(@Param('id', ParseIntPipe) Id: number, @Req() req) {
        const cookie = req.cookies['jwt'];
        const data = await this.jwt.verifyAsync(cookie, { publicKey: 'jwt_secret_key' });
        return this.bookingservice.deleteBookingById(Id,data['sub']);
    }

    @Patch(':id')
    async EditBookings(@Param('id', ParseIntPipe) Id: number,
        @Body() dto: EditBookingDto,@Req() req) {
            const cookie = req.cookies['jwt'];
            const data = await this.jwt.verifyAsync(cookie, { publicKey: 'jwt_secret_key' });
        return this.bookingservice.editBookingById(Id,dto,data['sub']);
    }
}