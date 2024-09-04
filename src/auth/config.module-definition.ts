import { ConfigurableModuleBuilder } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './types';

export interface AuthModuleOptions {
  jwtService: JwtService;
  userService: UserService;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN
} = new ConfigurableModuleBuilder<AuthModuleOptions>({
  moduleName: 'AuthModule',
})
  .setClassMethodName('forRoot')
  .setExtras({ isGlobal: true }, (definition, extras) => ({
    ...definition,
    global: extras.isGlobal,
  }))
  .build();
