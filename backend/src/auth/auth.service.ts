import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,
        private readonly usersService: UsersService) { }

    createToken(user: User) {
        return {
            jwt: this.jwtService.sign({
                id: user.id
            }, {
                expiresIn: '12h',
                subject: String(user.id),
                issuer: 'login',
                audience: 'users'
            })
        };
    }

    checkToken(token: string) {
        try {
            const data = this.jwtService.verify(token, {
                issuer: 'login',
                audience: 'users'
            });

            return data;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    isValidToken(token: string) {
        try {
            this.checkToken(token);

            return true;
        } catch (error) {
            return false;
        }
    }

    async login(user: string, password: string) {
        const authUser = await this.usersService.findOneByLogin(user, password);
        if (!authUser) {
            throw new UnauthorizedException('Wrong user credentials');
        }

        return this.createToken(authUser);
    }

}
