import { PrismaService } from '@app/common/database';
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
      select: { username: true },
    });
  }

  async login(username: string) {
    const payload = { username };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
