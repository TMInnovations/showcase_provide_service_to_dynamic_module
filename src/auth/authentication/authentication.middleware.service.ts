import {
  Inject,
  Injectable,
  NestMiddleware
} from '@nestjs/common';
import { NextFunction } from 'express';
import {
  AuthModuleOptions,
  MODULE_OPTIONS_TOKEN,
} from '../config.module-definition';
import { ModifiedRequest } from '../types';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: AuthModuleOptions,
  ) {}

  async use(req: ModifiedRequest, res: Response, next: NextFunction) {
    const user = await this.options.userService.findOrCreate(req.headers['x-user-id']);
    req.user = {
      id: user.id,
      role: user.role
    };
    next();
  }
}
