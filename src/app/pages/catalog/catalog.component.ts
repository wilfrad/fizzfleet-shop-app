import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductPost } from './../../models/product/product-post';
import { productPosts } from './products-list';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})

export class CatalogComponent {
  catalog: ProductPost[] = productPosts;
  http = inject(HttpClient);
  
  ngOnInit() {
    this.catalog.forEach(post => console.log(post.publishId));
    /*this.http.get<ProductPost[]>('https://localhost:7271/api/Catalog')
      .subscribe(posts => {
        this.catalog = posts;
        console.log(posts);
      });*/
  }
}
