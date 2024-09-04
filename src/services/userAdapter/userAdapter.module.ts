import { Module } from '@nestjs/common';
import { UserAdapterService } from './userAdapter.service';

@Module({
  imports: [],
  providers: [UserAdapterService],
  exports: [UserAdapterService],
})
export class UserAdapterModule {}
