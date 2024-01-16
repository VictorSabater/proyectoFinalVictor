export interface NoticiaNest{
    _id: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    content: string;
    images: string[];
    comment: string[];
    section: SectionNest;
}


export interface SectionNest{
    name: string
    icon:string
    route: string
}
