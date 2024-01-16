import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { NoticiasModule } from './noticias/noticias.module';

@Module({
  imports: [
      MongooseModule.forRoot(
          'mongodb+srv://root:root@victorbd.fjfwgiv.mongodb.net/NoticiasVICTOR?retryWrites=true&w=majority'
      ),
      NoticiasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
