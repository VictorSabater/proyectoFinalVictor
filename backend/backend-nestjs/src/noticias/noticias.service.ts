import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {NoticiaNest} from "./interface/noticia/noticia.interface";
import {InjectModel} from "@nestjs/mongoose";
import {NoticiaDto} from "./dto/noticia.dto/noticia.dto";


@Injectable()
export class NoticiasService {

    constructor(@InjectModel('Noticia') private noticiaModel:Model<NoticiaNest>) {
    }

    async create(noticiaDto: NoticiaDto): Promise<APIResult> {
        try {
            const noticia = new this.noticiaModel(noticiaDto);
            await noticia.save();
            return {
                status: 'Noticia Insertada'
            }
        } catch (e) {
            return {
                status: e
            }
        }
    }

    async getNoticias(): Promise<NoticiaNest[] |APIResult> {
        try {
            return await this.noticiaModel.find().sort({'date':-1})
        } catch (e) {
            return {
                status: e
            }
        }
    }

    async getNotcia(id: string): Promise<NoticiaNest |APIResult> {
        try {
            return await this.noticiaModel.findById(id);
        } catch (e) {
            return {
                status: e
            }
        }
    }

    async getNoticiaByName(name: string): Promise<NoticiaNest[] |APIResult> {
        try {
            const regex = new RegExp(name,'i')
            return await this.noticiaModel.find({$or: [{title: {$regex: regex}}, {author: {$regex: regex}}]});
        } catch (e) {
            return {
                status: e
            }
        }
    }

    async updateNoticia(id: string,noticiaDto: NoticiaDto): Promise<NoticiaNest[] |APIResult> {
        try {
         await this.noticiaModel.findByIdAndUpdate(
               id,
               {$set: noticiaDto},
               {new: true}
           )
            return{
               status: 'Noticia Actualizada'
            }
        } catch (e) {
            return {
                status: e
            }
        }
    }

    async deleteNoticia(id: string): Promise<APIResult> {
        try {
            const lo =  await this.noticiaModel.findByIdAndDelete(id)
           if (lo === null){
               return{
                   status: 'Noticia Borrada'
               }
           }else return {
               status: 'Noticia Borrada'
           }

        } catch (e) {
            return {
                status: e
            }
        }
    }

    async getSections(): Promise<NoticiaNest[] | APIResult> {
        try {
            return await this.noticiaModel.find().distinct('section')
        } catch (e) {
            return {
                status: e
            }
        }
    }

    async getBySection(section: string): Promise<NoticiaNest[] | APIResult>{
        try {
            return await this.noticiaModel.find({"section.name": section})
        } catch (e) {
            return {
                status: e
            }
        }
    }


}


export interface APIResult{
    status: string
}