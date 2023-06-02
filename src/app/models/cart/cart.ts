import { ProductPost } from "../product/product-post";

export class CartItem implements ProductPost {
    publishId!: number;
    cover!: string;
    title!: string;
    price!: number;
    count!: number;
    total!: number;
}