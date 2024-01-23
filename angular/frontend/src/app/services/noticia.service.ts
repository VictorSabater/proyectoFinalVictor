import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {APINoticia} from "../common/noticia";

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

  postNoticia(subirNoticia: APINoticia): Observable<any>{
    return this.http.post(this.URI,subirNoticia);
  }

  deleteNoticia(id: string): Observable<any>{
    return this.http.delete(this.URI + id)
  }


}
