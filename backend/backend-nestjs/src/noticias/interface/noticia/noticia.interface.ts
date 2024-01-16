export interface NoticiaNest{
    _id: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    content: string;
    images: string[];
    comment: string[];
    section: Section;
}


export interface Section{
    name: string
    icon:string
}
