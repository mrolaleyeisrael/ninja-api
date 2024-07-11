import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { NinjasController } from './ninjas/ninjas.controller';
import { UsersModule } from './users/users.module';
import { NinjasService } from './ninjas/ninjas.service';

@Module({
  imports: [NinjasModule, UsersModule],
  controllers: [AppController, NinjasController],
  providers: [AppService, NinjasService],
})
export class AppModule {}

// We will import the NinjasModule into the AppModule.