import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProductsService } from '../products.service';
// import { Subscription} from 'rxjs/Subscription';
import { Product } from './../../model/product';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {


  id: number;
  @Input() product: any = { image: '', name: '', brand: '', category: '', price: '' };


  constructor(private productSer: ProductsService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.productSer.getProducts(this.route.snapshot.params['id']).subscribe((data) => {
      this.product = data;
    })
  }

  // onSubmit() {
  //   let putPro = {
  //     image: this.product.image,
  //     name: this.product.name,
  //     brand: this.product.brand,
  //     category: this.product.category,
  //     price: this.product.price
  //   }

  //     this.productSer.updateProduct(this.route.snapshot.params['id']).subscribe((data) => {
  //       this.product = data;
  //       console.log(data)
  //       // this.router.navigate(['home/products']);
  //       this.productSer.getProduct().subscribe((data) => {
  //         this.product = data;
  //       })
  //     })
    
  // }

  updateProduct() {
    this.productSer.updateProduct(this.route.snapshot.params['id']).subscribe((result) => {
    this.router.navigate(['home/products/' ]);
    // }, (err) => {
    //   console.log(err);
    });
  }

  noEdit() {
    this.router.navigate(['home/products']);
  }

}
