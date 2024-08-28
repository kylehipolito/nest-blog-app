import { PrismaService } from '@app/common/database';
import { User } from '@app/common/entities';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async verifyUser(username: string, password: string) {
    return this.prisma.user.findFirst({
      where: { username, password },
      select: { id: true, username: true },
    });
  }

  async login(user: User) {
    const payload = user;

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  async verifyToken(bearerToken: string) {
    try {
      const token = bearerToken.split(' ')[1];

      return this.jwtService.verify(token);
    } catch (err: any) {
      console.log(err);
      return null;
    }
  }
}
