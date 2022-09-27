import { map } from "rxjs";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('booking')
export class Booking{
   @PrimaryGeneratedColumn() 
   id?:number ;

   @Column({type:'varchar',length:20,nullable:false})
   title:string;

   @Column({type:'text',nullable:false,default:null})
   desc:string;

   @CreateDateColumn({nullable:true})
   StartDate?:Date;

   @CreateDateColumn({nullable:true})
   EndDate?:Date;
   
   @Column({nullable:true})
   userId:number;
}