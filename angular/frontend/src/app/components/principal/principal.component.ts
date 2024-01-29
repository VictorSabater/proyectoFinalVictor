import {Component, OnInit} from '@angular/core';
import {NoticiaService} from "../../services/noticia.service";
import {APINoticia} from "../../common/noticia";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  faBaseball, faBasketball,
  faBookmark,
  faDesktop,
  faEarthAmericas,
  faEarthEurope,
  faFootball, faNewspaper
} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  noticias: APINoticia[] = []
  noticiaDelete: APINoticia = {
    _id: '',
    title: '',
    subtitle: '',
    content: '',
    images: [],
    author: '',
    date: '',
    section: {
      name: '',
      route: '',
      icon: ''
    }
  };


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

  deleteNoticia(noticia: APINoticia) {
    if (noticia._id) this.noticiaService.deleteNoticia(noticia._id).subscribe(
      (data: any)=> {
        this.loadNoticia();
      }
    )
  }


  protected readonly faBasketball = faBasketball;
  protected readonly faNewspaper = faNewspaper;
  protected readonly faDesktop = faDesktop;
}
