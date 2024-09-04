import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import {
  AuthModuleOptions,
  ModifiedRequest,
  MODULE_OPTIONS_TOKEN,
} from '../types';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: AuthModuleOptions,
  ) {}

  async use(req: ModifiedRequest, res: Response, next: NextFunction) {
    const user = await this.options.getUser(req.headers['x-user-id']);
    req.user = {
      id: user.id,
      role: user.role,
    };
    next();
  }
}
