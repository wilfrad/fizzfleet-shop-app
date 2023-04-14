import { Component, Input } from '@angular/core';
import { ProductPost } from './../../../models/product/product-post';

@Component({
	selector: 'app-post',
	templateUrl: './product-post.component.html',
})

export class ProductPostComponent{
    @Input() post!: ProductPost;
}