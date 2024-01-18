import { Component, OnInit } from '@angular/core';
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute} from "@angular/router";
import {APINoticia} from "../../common/noticia";

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {
  seccion!: string|null;
  noticias: APINoticia[] = []

  longitudNoticias: APINoticia[] = [];
  posicion!: number;

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.seccion = this.activatedRoute.snapshot.params['seccion']
    this.loadSecciones();
    this.posicion = 0;
  }

  private loadSecciones() {
    this.noticiaService.getBySections(this.seccion).subscribe(
      {
        next: value => {
          this.noticias = value;

          this.longitudNoticias = this.noticias.slice(this.posicion,(this.posicion + 5));
          this.posicion += 5;
          console.log(this.longitudNoticias)
          console.log(this.noticias)
          console.log(this.posicion)
          if (this.posicion >= this.noticias.length){
            this.posicion = this.noticias.length ;
          }
        }
      }
    )
  }

  loadData(event: any) {
    if (this.posicion < this.noticias.length) {
      console.log('Cargando siguientes ...');
      setTimeout(() => {
        let nuevoArr = this.noticias.slice(this.posicion, this.posicion + 5);
        this.posicion += 5;
        if (this.posicion >= this.noticias.length) {
          this.posicion = this.noticias.length;
        }
        this.longitudNoticias.push(...nuevoArr);
        event.target.complete();
      }, 1000);
    }
  }
}
