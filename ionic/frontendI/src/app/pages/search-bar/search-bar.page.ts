import {Component, OnInit} from '@angular/core';
import {APINoticia} from "../../common/noticia";
import {NoticiaService} from "../../services/noticia.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  title = '';
  noticias: APINoticia[] = []

  longitudNoticias: APINoticia[] = [];
  posicion!: number;


  constructor(private noticiaService: NoticiaService) {
  }

  ngOnInit() {
    this.buscar(event);
    this.posicion = 0;
  }

  buscar(event: any) {
    this.title = event.detail.value;

    this.noticiaService.getByAuthorTitle(this.title).subscribe(
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
