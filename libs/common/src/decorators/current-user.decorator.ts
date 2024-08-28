import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities';

const getCurrentExecutionContext = (context: ExecutionContext): User => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_: unknown, context: ExecutionContext) =>
    getCurrentExecutionContext(context),
);
