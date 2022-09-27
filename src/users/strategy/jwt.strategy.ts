import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { usersService } from "../users.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(config :ConfigService,
      private  user: usersService,){
        super({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'jwt_secret_key' });
    }
  async  validate(payload:{
        sub:number;email:string;
    }){ const user= await this.user.findById(payload.sub);
    delete user.password;
        return user;
    }
}