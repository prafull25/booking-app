import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GoogleStrategy, JwtStrategy } from "./strategy";
import { UserController } from "./users.controller";
import { UsersEntity } from "./users.entity";
import { usersService } from "./users.service";

@Module({
    imports:[TypeOrmModule.forFeature([UsersEntity]),JwtModule.register({})],
    controllers:[UserController],
    providers:[usersService,JwtStrategy,GoogleStrategy],
    exports : [usersService]
})

export class UsersModule{}