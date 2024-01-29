import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../validators/form-validator";
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {APINoticia} from "../../common/noticia";




@Component({
  selector: 'app-noticia-edit',
  templateUrl: './noticia-edit.component.html',
  styleUrls: ['./noticia-edit.component.css']
})
export class NoticiaEditComponent implements OnInit{


  noticiaForm: FormGroup = this.formBuilder.group({
    _id: [''],
    title: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    subtitle: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    content: ['', [Validators.minLength(2),Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    images: ['', [ Validators.required]],
    author: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    date: ['', Validators.required],
    section: this.formBuilder.group({
      name: ['', [Validators.minLength(2),
        Validators.maxLength(255), Validators.required,
        FormValidators.notOnlyWhiteSpace]],

      icon: ['', [Validators.minLength(2),
        Validators.maxLength(255), Validators.required,
        FormValidators.notOnlyWhiteSpace]],
      route: []
    })
  });

  noticiaAnyadir: APINoticia = {
    title: '',
    subtitle: '',
    content: '',
    images: [],
    author: '',
    date: '',
    section: {
      name: ''
    }
  }
  id!: string | null

  toast = {
    header: '',
    body: '',
    duration: 2000
  }
  toastShow = false;
  edit = false;
  date: Date = new Date();

  constructor(private formBuilder: FormBuilder, private noticiaService: NoticiaService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['id'];
   if(this.id != null){
     this.edit = true;
   }else {
     this.edit = false;
   }


   if (this.edit){
     this.loadNoticia();
   }

  }

  get title(): any{
    return this.noticiaForm.get('title');
  }
  get subtitle(): any{
    return this.noticiaForm.get('subtitle');
  }
  get content(): any{
    return this.noticiaForm.get('content');
  }
  get images(): any{
    return this.noticiaForm.get('images');
  }
  get author(): any{
    return this.noticiaForm.get('author');
  }
  get dateNoticia(): any{
    return this.noticiaForm.get('date');
  }

  get section(): any{
    return this.noticiaForm.get('section');
  }

  get name(): any{
    return this.noticiaForm.get('section.name')
  }

  get icon(): any{
    return this.noticiaForm.get('section.icon')
  }


  addNoticia(){
    console.log(this.noticiaForm)
    if(this.noticiaForm.invalid){
      this.noticiaForm.markAllAsTouched();
      return;
    }
    this.noticiaAnyadir = this.noticiaForm.value;
    console.log(this.noticiaAnyadir)
    delete this.noticiaAnyadir._id;
    this.noticiaService.postNoticia(this.noticiaAnyadir).subscribe(
      (data: any) => {
        console.log(data)
        this.toastGenerator(data);
        this.toastShow = true

        this.router.navigateByUrl('/principal');
      }
    )
  }

  private toastGenerator(data: any){
    this.toast.body = data.message;
    this.toastShow = true;
    setTimeout(() => {
      this.toastShow = false
    }, 2000);
  }

  editNoticia() {
  if (this.noticiaForm.invalid){
    this.noticiaForm.markAllAsTouched()
    return;
  }
  this.noticiaAnyadir = this.noticiaForm.value;
  delete this.noticiaAnyadir._id;
  this.noticiaService.updateNoticia(this.noticiaAnyadir, this.id).subscribe(
    (data: any) =>{
      this.router.navigateByUrl('/principal');
    }

  )
  }

  loadNoticia(){
    this.noticiaService.getNoticia(this.id).subscribe(
      {
        next: value => {
          this.noticiaForm.setValue(value);
        }
      }
    )
  }

  protected readonly Date = Date;
}
