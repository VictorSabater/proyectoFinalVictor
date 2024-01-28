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
    content: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    images: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    author: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    date: ['', [Validators.minLength(2),
      Validators.maxLength(255), Validators.required,
      FormValidators.notOnlyWhiteSpace]],
    section: this.formBuilder.group({
      name: ['', [Validators.minLength(2),
        Validators.maxLength(255), Validators.required,
        FormValidators.notOnlyWhiteSpace]],

      icon: ['', [Validators.minLength(2),
        Validators.maxLength(255), Validators.required,
        FormValidators.notOnlyWhiteSpace]]
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
    console.log(this.noticiaForm.invalid)
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

  }

  protected readonly Date = Date;
}
