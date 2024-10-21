import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dtos';

@Controller('users')
export class UsersController {
    constructor (private userService:UsersService){}

    @Post()
    @UsePipes(ValidationPipe)
    createUSer(@Body() createUserDto:CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

}
