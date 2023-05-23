import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: MongoRepository<User>) { }

    create(userDto: CreateUserDto) {
        const user = this.usersRepository.create(userDto);
        user.profile_photo = 'https://lexq.us/wp-content/uploads/2019/07/user-pic.jpg';
        return this.usersRepository.save(user);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOneBy({ _id: new ObjectId(id) });
    }

    findOneByUsername(username: string): Promise<User> {
        return this.usersRepository.findOne({ where: {user: username} });
    }

    async update(id: string, userDto: UpdateUserDto) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        return this.usersRepository.update(id, userDto);
    }

    async remove(id: string) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        return this.usersRepository.remove(user);
    }
}
