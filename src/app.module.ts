import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthenticationMiddleware } from './auth/authentication/authentication.middleware.service';
import { AuthModuleOptions, GetUserFunctionType } from './auth/types';
import { UserModule } from './services/userAdapter/userAdapter.module';
import { UserAdapterService } from './services/userAdapter/userAdapter.service';

export class AuthModuleOptionsFactory {
  create() {}
}

@Module({
  imports: [
    AuthModule.forRootAsync({
      imports: [UserModule],
      useFactory: (
        getUserFunction: GetUserFunctionType,
      ): AuthModuleOptions => ({
        getUser: getUserFunction,
      }),
      inject: [UserAdapterService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    const authModule = consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
