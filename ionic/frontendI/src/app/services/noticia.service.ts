import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {APINoticia, Section} from "../common/noticia";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private URI = 'http://localhost:3000/api/noticias/';

  constructor(private http:HttpClient) { }

  getNoticias():Observable<APINoticia[]>{
    return this.http.get<APINoticia[]>(this.URI);
  }

  getNoticia(id: string | null):Observable<APINoticia>{
    return this.http.get<APINoticia>(this.URI + 'noticia/'+id);
  }

  getByAuthorTitle(name: string): Observable<APINoticia[]> {
    return this.http.get<APINoticia[]>(this.URI + 'title/' + name);
  }

  getSections():Observable<Section[]>{
    return this.http.get<Section[]>(this.URI + "sections");
  }

  getBySections(seccion: string| null):Observable<APINoticia[]>{
    return this.http.get<APINoticia[]>(this.URI + "section/"+seccion)
  }

  updateComments(id: string | null, noticiaDto: APINoticia): Observable<APINoticia> {
    return this.http.patch<APINoticia>(this.URI + id, noticiaDto);
  }
}
