import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductView } from './../../../models/product/product-view';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
})

export class ProductViewComponent {
	publishId!: string;
	publish!: ProductView;
	http = inject(HttpClient);
	constructor(private route: ActivatedRoute) {}
	ngOnInit() {
		//this.publishId = this.route.snapshot.params['id'];
		this.http.get<ProductView>(`http://localhost:5300/publish/${this.publishId}`)
			.subscribe(
					//publish => this.publish = publish
				);
	}
}