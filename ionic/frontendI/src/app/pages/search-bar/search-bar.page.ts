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

  constructor(private noticiaService: NoticiaService) {
  }

  ngOnInit() {
    this.buscar(event);
  }

  buscar(event: any) {
    this.title = event.detail.value;

    this.noticiaService.getByAuthorTitle(this.title).subscribe(
      {
        next: value => {
          this.noticias = value;
        }
      }
    )
  }

}
