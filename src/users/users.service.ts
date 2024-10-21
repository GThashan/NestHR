import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client'; 
import { PrismaService } from 'src/prisma/prisma.service';  

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  
  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  getUsers(){
    return this.prisma.user.findMany();
  }

  async getUserById(iD: number) { 
    const user = await this.prisma.user.findUnique({where: { iD },})
    if(!user) throw new HttpException('User not found', 404);
    return user
  }
  
}
