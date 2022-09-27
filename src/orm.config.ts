import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config:TypeOrmModuleOptions={
    type:'postgres',
    port:5432,
    username: 'postgres',
    password: 'Pr123@#',
    host:'127.0.0.1',
    database:'mydb',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}'],

};