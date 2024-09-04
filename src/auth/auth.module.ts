import { Module } from '@nestjs/common';
import { AuthenticationMiddleware } from './authentication/authentication.middleware.service';
import { ConfigurableModuleClass } from './config.module-definition';

@Module({
  imports: [],
  exports: [AuthenticationMiddleware],
  providers: [AuthenticationMiddleware],
})
export class AuthModule extends ConfigurableModuleClass {}
