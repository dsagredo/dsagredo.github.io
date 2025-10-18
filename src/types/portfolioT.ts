export interface TagT {
    id: string;
    name: string;
    slug: string;
}

export interface ProjectT {
    imagen: string;
    title: string;
    description: string;
    tags: TagT[];
    github: string;
    demo: string;
}
