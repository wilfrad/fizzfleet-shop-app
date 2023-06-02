export class ProductView {
    postId: string = '';
    title: string = '';
    price: number= 0;
    categories: string[]= [];
    images: Image[] = [];
    description: string = '';
    active: boolean = false;
    specs: Spec[] = [];
}

export interface Image {
    fileName: string;
    thumbnail?: string;
    image: string;
}

export interface Spec {
    name: string;
    value: string;
}