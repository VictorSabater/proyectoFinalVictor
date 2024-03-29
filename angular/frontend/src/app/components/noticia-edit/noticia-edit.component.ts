import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../validators/form-validator";
import {NoticiaService} from "../../services/noticia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {APINoticia} from "../../common/noticia";
import {faCircleMinus, faCirclePlus, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {faFootball, faBookmark, faDesktop} from "@fortawesome/free-solid-svg-icons";





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
    images: [[]],
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
        FormValidators.notOnlyWhiteSpace]]
    }),
    comments: []
  });

  myNewImage = new FormGroup({
    newImage: new FormControl('')
  })

  noticiaAnyadir: APINoticia = {
    title: '',
    subtitle: '',
    content: '',
    images: [],
    author: '',
    date: '',
    section: {
      name: ''
    },
    comments:[
      {
        name:'',
        email:'',
        comment:''
      }
    ]
  }
  id!: string | null
  mostrarImagen: string[] = []


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

  get newImage(): any{
    return this.myNewImage.get('newImage')?.value;
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
    this.noticiaAnyadir.comments = []
    this.noticiaService.postNoticia(this.noticiaAnyadir).subscribe(
      (data: any) => {
        console.log(data)
        this.toastGenerator(data);
        this.toastShow = true
        console.log(this.noticiaForm)
        console.log(this.noticiaAnyadir)
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
          this.mostrarImagen = this.noticiaForm.getRawValue().images
        }
      }
    )
  }

  addNewImages(newImage: string){
    this.mostrarImagen = [];
    if (!this.edit) {
      this.images.value.push(newImage)
      this.mostrarImagen = this.images.value
    }
    else {
      this.mostrarImagen = this.noticiaForm.getRawValue().images;
      console.log(this.mostrarImagen)
      this.mostrarImagen.push(newImage);
      this.images.push(newImage);
      console.log(this.mostrarImagen)
      console.log(this.images)
      this.noticiaForm.setControl('images',new FormControl(this.mostrarImagen))
    }
    this.myNewImage.reset();

  }
  protected readonly Date = Date;
  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faFootball = faFootball;
  protected readonly faDesktop = faDesktop;
  protected readonly faBookmark = faBookmark;
  protected readonly faCircleMinus = faCircleMinus;

}
