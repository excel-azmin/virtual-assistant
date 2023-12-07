import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserInfoSchema } from './entities/users-info.entity';
import { UsersInfoController } from './users-info.controller';
import { UsersInfoService } from './users-info.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UsersInfo', schema: UserInfoSchema }]),
  ],
  controllers: [UsersInfoController],
  providers: [UsersInfoService],
})
export class UsersInfoModule {}
