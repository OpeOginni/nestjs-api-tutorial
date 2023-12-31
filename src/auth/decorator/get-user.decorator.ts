import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const request: Express.Request & { user: number } = ctx.switchToHttp().getRequest();

        if (data) {
            return request.user[data];
        }
        return request.user;
    },
);