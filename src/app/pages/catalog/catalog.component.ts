import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductPost } from './../../models/product/product-post';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})

export class CatalogComponent {
  apiResource: string = "https://localhost:7271/api/Resource/image/0?fileName=";
  catalog!: ProductPost[];
  
  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.http.get<ProductPost[]>('https://localhost:7271/api/Catalog/0-0?offSet=1&limit=100')
      .subscribe(posts => {
        this.catalog = posts;
        this.catalog.forEach(post => post.cover.fileName = `${this.apiResource}${post.cover.fileName}`)
    });
  }
}
