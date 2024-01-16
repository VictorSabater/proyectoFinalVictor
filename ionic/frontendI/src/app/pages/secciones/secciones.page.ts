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

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.seccion = this.activatedRoute.snapshot.params['seccion']
    this.loadSecciones();
  }

  private loadSecciones() {
    this.noticiaService.getBySections(this.seccion).subscribe(
      {
        next: value => {
          this.noticias = value;
        }
      }
    )
  }
}
