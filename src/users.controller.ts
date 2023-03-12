import { Body, Controller, Delete, Get, Ip, Param, Post, Put } from "@nestjs/common";
import {CreateUserDto} from './dto/createuserdto'

let USERS = []



@Controller('/users')
export class UserController{
    @Post()
    addUser(@Body() createUserDto: CreateUserDto){
        USERS.push(createUserDto)
        return {
            message:'user added'
        }
    }

    @Get()
    getUsers(@Ip() ip:string){
        console.log(ip) // gives the ip of request
        return USERS
    }

    @Get(":id")
    getUser(@Param("id") id:number){
        return USERS.find(user => user.id === +id)
    }

    @Put(":id")
    updateUser(@Param("id") id:number, @Body() updateUserDTO : CreateUserDto){
        const userIdx  =  USERS.findIndex(user => +user.id === +id)
        if(!userIdx){
            return;
        }
        USERS[userIdx] = updateUserDTO
        return{
            messsage:'user updated'
        }
    }


    @Delete(":id")
    daleteUser(@Param("id") id:number){
        USERS = USERS.filter(user => +user.id !== +id)

    }


}