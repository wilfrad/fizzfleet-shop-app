import { Image } from './product-view'

export interface ProductPost {
    publishId: number;
    cover: Image;
    title: string;
    price: number;
    category: string;
}