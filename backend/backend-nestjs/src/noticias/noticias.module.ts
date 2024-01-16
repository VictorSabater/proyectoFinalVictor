import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';
import {MongooseModule} from "@nestjs/mongoose";
import {NoticiaSchema} from "./schemas/noticia.schema/noticia.schema";

@Module({
    imports:[
        MongooseModule.forFeature(
            [
                {
                     name: 'Noticia',
                     schema: NoticiaSchema,
                     collection: 'noticias2024'
                }
            ]
        )
    ],
  controllers: [NoticiasController],
  providers: [NoticiasService]

})
export class NoticiasModule {}
