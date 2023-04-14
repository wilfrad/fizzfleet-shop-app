import { Image } from './image';
import { Spec } from './spec';

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