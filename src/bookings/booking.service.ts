import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Booking } from "./booking.entity";
import { BookingDto, EditBookingDto } from "./dto";
let plivo = require('plivo');
let client = new plivo.Client('MAOGFIZWM4OWVIODIYYJ', 'YWVlM2FlNmU4Y2QwNWY2MzllMjM5YmY0N2U1ZTZm');

@Injectable()
export class BookingService {
   constructor(
      @InjectRepository(Booking)
      private bookingdata: Repository<Booking>,
   ) { }

   async AddBooking(booking: BookingDto) {
      const newBooking = await this.bookingdata.create(booking);
      await this.bookingdata.save(newBooking);
      return newBooking;
   }

   async getAllBookings(userid: number) {
      const Bookings = await this.bookingdata.find({ where: { userId: userid } });
      return Bookings;
   }
   async getBookingById(id: number) {
      const BookingbyId = await this.bookingdata.find({ where: { id: id, }, });
      if (!BookingbyId)
         throw new ForbiddenException('Access to resources denied',);
      return BookingbyId;
   }

   async deleteBookingById(id: number, userId: number) {
      const booking = await this.bookingdata.find({ where: { id: id, userId: userId }, });

      if (!booking)
         throw new ForbiddenException('Access to resources denied',);

      await this.bookingdata.delete(id);
      return "ohh! Booking is cancelled"
   }

   async editBookingById(id: number, dto: EditBookingDto, userId: number) {
      const booking = await this.bookingdata.find({ where: { id: id, userId: userId }, });

      if (!booking)
         throw new ForbiddenException('Access to resources denied',);

      return this.bookingdata.update(id, dto);
   }

   // send confirmation msg
   sendmsg(mobile: string, name: string) {
      client.messages.create({
         src: '+917366832105',
         dst: "+91" + mobile,
         text: "Congratulations " + name + "! your booking is successful. " +
            "Please fill free to contact us if you have any query..!! Thanks:Prafull",
      }).then(function (response) {
      });
   }
}