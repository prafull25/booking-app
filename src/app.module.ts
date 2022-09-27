import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookingModule } from './bookings/booking.module';
import { UsersModule } from './users/users.module';
import {config } from './orm.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { GoogleStrategy } from './users/strategy';
@Module({
  imports: [TypeOrmModule.forRoot(config),UsersModule,BookingModule,ConfigModule.forRoot({isGlobal:true,})],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
