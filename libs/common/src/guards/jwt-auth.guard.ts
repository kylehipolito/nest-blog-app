import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { User } from '../entities';
import { AUTH_SERVICE } from '../constants';

export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers?.authorization;

    if (!token) {
      return false;
    }

    const authResponse = await firstValueFrom<User>(
      this.authClient.send('authenticate', token),
    );

    request.user = authResponse;

    return true;
  }
}
