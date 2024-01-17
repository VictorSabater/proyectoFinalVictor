export interface NoticiaNest{
    _id: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    content: string;
    images: string[];
    comment: CommentsNest[];
    section: SectionNest;
}


export interface SectionNest{
    name: string
    icon:string
    route: string
}

export interface CommentsNest{
    name: string,
    email: string,
    comment: string
}
