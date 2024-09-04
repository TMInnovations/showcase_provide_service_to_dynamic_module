import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { AuthenticationMiddleware } from './auth/authentication/authentication.middleware.service';
import { UserAdapterModule } from './services/userAdapter/userAdapter.module';
import { UserAdapterService } from './services/userAdapter/userAdapter.service';

export class AuthModuleOptionsFactory {
  create() {}
}

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
    }),
    AuthModule.forRootAsync({
      imports: [JwtModule, UserAdapterModule],
      useFactory: (jwtService: JwtService, userService: UserAdapterService) => ({
        jwtService,
        userService,
      }),
      inject: [JwtService, UserAdapterService],
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
