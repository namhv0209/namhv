import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { Router} from '@angular/router';
import { Product} from './../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public product: Product;
  
  imagePro:string = "";
  namePro:string = "";
  brandPro:string = "";
  categoryPro:string = "";
  pricePro:string = "";

  constructor(private productSer: ProductsService,  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){

    let newProduct = {
      name: this.namePro,
      image: this.imagePro,
      brand: this.brandPro,
      categoryId: this.categoryPro,
      price: this.pricePro
    }
    if(this.imagePro!='' && this.namePro!='' && this.brandPro!='' &&this.categoryPro!='' && this.pricePro!=''){
      this.productSer.addProduct(newProduct).subscribe((data) => {
        console.log(data)
      })
    }else{
      alert('Bạn cần nhập đầy đủ thông tin sản phẩm để tiếp tục!!!')
    }
    
  }

  noAdd(){
    this.router.navigateByUrl('/home/products');
  }

}
