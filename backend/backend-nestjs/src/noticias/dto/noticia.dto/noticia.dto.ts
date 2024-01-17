export class NoticiaDto {
    _id: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    content: string;
    images: string[];
    comment: CommentsNest[];
    section: Section;
}

export class Section{
    name: string
    icon:string
    route: string
}

export class CommentsNest{
    name: string
    email: string
    comment: string
}