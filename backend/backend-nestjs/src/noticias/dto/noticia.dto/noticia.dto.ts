export class NoticiaDto {
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

export class Section{
    name: string
    icon:string
}