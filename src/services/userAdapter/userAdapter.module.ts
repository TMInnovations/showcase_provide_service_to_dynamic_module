import { Module } from '@nestjs/common';
import { UserAdapterService as UserService } from './userAdapter.service';

@Module({
  imports: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
