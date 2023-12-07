import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersInfoModule } from './users-info/users-info.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:mongorootPass2023@202.91.42.198:27017/virtualAssistantDB',
      {
        authSource: 'admin',
      },
    ),
    UsersInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
