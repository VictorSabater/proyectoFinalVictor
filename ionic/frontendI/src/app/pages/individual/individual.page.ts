import {Component, OnInit, ViewChild} from '@angular/core';
import {APINoticia} from "../../common/noticia";
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IonModal} from "@ionic/angular";
import { ToastController} from "@ionic/angular";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {
  noticia!: APINoticia
  id!: string | null
  @ViewChild(IonModal) modal!: IonModal;
  comentarioNuevo = {
    name: '',
    email: '',
    comment: ''
  };

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute, private toastCtrl:ToastController) {
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

  onWillDismiss(event: any) {
    if (event.detail.role == 'confirm') {
      this.noticia.comments.push(this.comentarioNuevo);
      this.noticiaService.updateComments(this.id, this.noticia).subscribe();
      this.presentToast('COMENTARIO AÑADIDO...')
    }

  }

  cancel() {
    this.modal.dismiss(null, 'cancel')
    this.presentToast('Comentario cancelado!')
  }

  onSubmitTemplate() {
    this.modal.dismiss(this.comentarioNuevo, 'confirm');
  }

  private async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      color: 'success',
      position: "bottom"
    });
    await toast.present();
  }
}
