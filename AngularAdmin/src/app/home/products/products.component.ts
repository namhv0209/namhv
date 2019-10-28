import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product} from './../../model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: []
})
export class ProductsComponent implements OnInit {

  listProduct: any = [];
  product : Product [] = [];


  constructor(private productSer: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productSer.getProduct().subscribe((data) => {
      this.listProduct = data;
    })
  }

  getproducts() {
    this.productSer.getProduct().subscribe((data) => {
      this.listProduct = data;
    })
  }

  AddProduct() {
    this.router.navigateByUrl('/home/add-product');
  }

  // DetailProduct(id) {
  //   this.productSer.getProducts(id).subscribe((data) => {
  //     this.listProduct = data;
  //     this.router.navigateByUrl('/home/product-detail');
  //     console.log()
  //   })
  // }


  // EditProduct(product:Product, id:number) {
  //   this.router.navigateByUrl('/home/edit-product');
  //   this.productSer.updateProduct(product, id).subscribe((data) => {
  //     this.getproducts();
      
  //   })
  // }

  Deleteproduct(id) {
    alert('Bạn muốn xóa sản phẩm ?')
    this.productSer.deleteProduct(id).subscribe((data) => {
      this.getproducts();
      this.router.navigateByUrl('/home/products');
    }, (err) => {
      console.log(err);
    }
    )
  }

}

