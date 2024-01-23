import {Component, OnInit} from '@angular/core';
import {NoticiaService} from "../../services/noticia.service";
import {APINoticia} from "../../common/noticia";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  implements OnInit{
noticias: APINoticia[] = []


constructor(private noticiaService: NoticiaService) {
}

  ngOnInit(): void {
    this.loadNoticia();
  }

  private loadNoticia() {
    this.noticiaService.getNoticias().subscribe(
      {
        next: value => {
          this.noticias = value;
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
