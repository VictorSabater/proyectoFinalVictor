import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {NoticiasService} from "./noticias.service";
import {NoticiaDto} from "./dto/noticia.dto/noticia.dto";

@Controller('api/noticias')
export class NoticiasController {
    constructor(private readonly noticiaService: NoticiasService) {
    }



    @Post('')
    async create(@Body() noticiaDto: NoticiaDto){
        return this.noticiaService.create(noticiaDto);
    }


    @Get('')
    async getMovies(){
        return this.noticiaService.getNoticias();
    }

    @Get('noticia/:id')
    async getMovie(@Param('id')id:string){
        return this.noticiaService.getNotcia(id);
    }

    @Get('title/:name')
    async getNoticiaByName(@Param('name')name:string){
        return this.noticiaService.getNoticiaByName(name);
    }

    @Patch('/:id')
    async updateNoticia(
        @Param('id')id:string,
        @Body() noticiaDto: NoticiaDto
    ){
        return this.noticiaService.updateNoticia(id,noticiaDto);
    }

    @Delete('/:id')
    async deleteNoticia(@Param('id')id:string){
        return this.noticiaService.deleteNoticia(id);
    }

    @Get('/sections')
    async getSections() {
        return this.noticiaService.getSections();
    }

    @Get('/section/:section')
    async getBySection(@Param('section')section: string) {
        return this.noticiaService.getBySection(section);
    }



}
