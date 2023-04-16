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

export class Image {
    coverUrl!: string;
    thumbnailUrl!: string;
}

export class Spec {
    name: string = '';
    value: string = '';
}