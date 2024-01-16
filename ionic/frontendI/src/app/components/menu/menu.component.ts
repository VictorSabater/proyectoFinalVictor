import { Component, OnInit } from '@angular/core';
import {Componente} from "../../common/menu";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  componentes: Componente[]  = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.dataService.getComponentes().subscribe(
      data => {
        this.componentes = data;
      }
    );
  }
}
