import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductView } from './../../../models/product/product-view';

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
})

export class ProductPostComponent {
	@Input() postId!: string;
	post: ProductView;
	http = inject(HttpClient);
	constructor(post: ProductView) {
		this.post = post;
	}

	ngOnInit() {
		this.http.get<ProductView>(`http://localhost:5300/post/${this.postId}`)
			.subscribe(post => this.post = post);
	}
}