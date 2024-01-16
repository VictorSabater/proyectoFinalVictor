import { Component, OnInit } from '@angular/core';
import {APINoticia} from "../../common/noticia";
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {
noticia!:APINoticia
  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadNoticia();
  }

  private loadNoticia() {
  const id = this.activatedRoute.snapshot.params;
    this.noticiaService.getNoticia(id['id']).subscribe(
      {
        next: value => {
          this.noticia = value;
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
}
