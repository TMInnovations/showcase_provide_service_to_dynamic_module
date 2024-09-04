import { Module } from '@nestjs/common';
import { AuthenticationMiddleware } from './authentication/authentication.middleware.service';
import { ConfigurableModuleClass } from './types';

@Module({
  imports: [],
  exports: [AuthenticationMiddleware],
  providers: [AuthenticationMiddleware],
})
export class AuthModule extends ConfigurableModuleClass {}
