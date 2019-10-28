import { Component, OnInit, Input } from '@angular/core';
import { ProductsService} from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product} from './../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // product:any;
   id: number;
  @Input() product:any = { image: '', name: '', brand:'', categoryId: '', price: '', description: '' };

  constructor(public productSer: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productSer.getProducts(this.route.snapshot.params['id']).subscribe((data)=> {
      console.log(data);
      this.product = data;
    })
  }

  Back() {
    this.router.navigate(['home/products']);
  }

}
