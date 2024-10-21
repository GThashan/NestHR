import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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

    
    @Get(':id')
   getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
}


}
