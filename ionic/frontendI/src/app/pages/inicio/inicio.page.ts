import {Component, OnInit} from '@angular/core';
import {APINoticia} from "../../common/noticia";
import {NoticiaService} from "../../services/noticia.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  data: APINoticia[] = []
  longitudNoticias: APINoticia[] = [];
  posicion!: number;

  constructor(private noticiaService: NoticiaService) {
  }

  ngOnInit() {
    this.loadNoticia();
    this.posicion = 0;
  }


  private loadNoticia() {
    this.noticiaService.getNoticias().subscribe(
      {
        next: value => {
          this.data = value;

          this.longitudNoticias = this.data.slice(this.posicion,(this.posicion + 5));
          this.posicion += 5;

          if (this.posicion >= this.data.length){
            this.posicion = this.data.length;
          }
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    );
  }

  loadData(event: any) {
    if (this.posicion < this.data.length) {
      console.log('Cargando siguientes ...');
      setTimeout(() =>{
        let nuevoArr = this.data.slice(this.posicion, this.posicion + 5);
        this.posicion += 5;
        if (this.posicion >= this.data.length){
          this.posicion = this.data.length;
        }
        this.longitudNoticias.push( ...nuevoArr);
        event.target.complete();
      }, 1000 );
    }
  }
}

