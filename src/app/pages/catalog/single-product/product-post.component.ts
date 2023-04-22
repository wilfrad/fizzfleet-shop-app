import { Component, Input, NgModule } from '@angular/core';
import { ProductPost } from './../../../models/product/product-post';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-post',
	templateUrl: './product-post.component.html'
})

export class ProductPostComponent {
	@Input() post!: ProductPost;
}