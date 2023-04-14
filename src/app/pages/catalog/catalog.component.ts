import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductPost } from './../../models/product/product-post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})

export class CatalogComponent {
  catalog!: ProductPost[];
  http = inject(HttpClient);
  
  ngOnInit() {
    this.http.get('https://localhost:7271/api/Catalog')
      .subscribe(posts => {
        //this.catalog = posts;
        console.log(posts);
      });
  }
}