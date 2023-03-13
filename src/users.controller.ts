import { Body, Controller, Delete, Get, Inject, Ip, Param, Post, Put } from "@nestjs/common";
import {CreateUserDto} from './dto/createuserdto'
import { UsersStore } from "./store/users.stores";

let USERS = []



@Controller('/users')
export class UserController{
    // @Post()
    // addUser(@Body() createUserDto: CreateUserDto){
    //     USERS.push(createUserDto)
    //     return {
    //         message:'user added'
    //     }
    // }

    // @Get()
    // getUsers(@Ip() ip:string){
    //     console.log(ip) // gives the ip of request
    //     return USERS
    // }

    // @Get(":id")
    // getUser(@Param("id") id:number){
    //     return USERS.find(user => user.id === +id)
    // }

    // @Put(":id")
    // updateUser(@Param("id") id:number, @Body() updateUserDTO : CreateUserDto){
    //     const userIdx  =  USERS.findIndex(user => +user.id === +id)
    //     if(!userIdx){
    //         return;
    //     }
    //     USERS[userIdx] = updateUserDTO
    //     return{
    //         messsage:'user updated'
    //     }
    // }


    // @Delete(":id")
    // daleteUser(@Param("id") id:number){
    //     USERS = USERS.filter(user => +user.id !== +id)

    // }

//************************************************************************************** *

    // constructor(private store: UsersStore){
    //     console.log(this.store)
    // } // --- 2

    // constructor(@Inject('STORE') private store: UsersStore ){
    //     console.log(this.store)
    // } --- 1

    //value provider 
    // constructor(@Inject('DATABASE_NAME') private db:string ){
    //     console.log(db)
    // } //--- string value as provider

    // constructor(@Inject('MAIL') private email:string[]){
    //     console.log(email)
    // } // array as provider

    constructor(@Inject('ENV_CONFIG') private config:Record<string,number>){
        console.log(config)
    } // object as provider

}