import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {NoticiaService} from "../../services/noticia.service";
import {Section} from "../../common/noticia";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  componentes: Section[]  = [];

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.noticiaService.getSections().subscribe(
      {
        next: value => {
          this.componentes = value;
        }
      }
    )
  }
}
