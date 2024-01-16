import {Component, OnInit} from '@angular/core';
import {APINoticia} from "../../common/noticia";
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {
  noticia!: APINoticia
  id!: string | null

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadNoticia();
  }

  private loadNoticia() {
    this.noticiaService.getNoticia(this.id).subscribe(
      {
        next: value => {
          this.noticia = value;
        }
      }
    )

  }
}
