import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersInfoModule } from './users-info/users-info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This makes ConfigModule available globally
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        authSource: configService.get<string>('MONGO_AUTH_SOURCE'),
      }),
      inject: [ConfigService],
    }),
    UsersInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
