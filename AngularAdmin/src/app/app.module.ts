import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './home/products/products.component';
import { CategoryComponent } from './home/category/category.component';

//import service
// import { UserService} from '../app/user.service';
// import { ProductService} from '../app/home/product.service';
// import { ProductService} from '../app/home/product.service';

//Client
import { HttpClientModule} from '@angular/common/http';

//material
import { FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';

//Routers
import { Routes, RouterModule} from '@angular/router';
import { AddProductComponent } from './home/add-product/add-product.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { EditProductComponent } from './home/edit-product/edit-product.component';
const routes: Routes = [
  // {path:'', component: LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent,
    children:[
      // {path:'', redirectTo:'/category', pathMatch: 'full'},
      {path:'products', component:ProductsComponent},
      {path:'category', component:CategoryComponent},
      {path:'add-product', component:AddProductComponent},
      {path:':id/product-detail', component:ProductDetailComponent},
      {path:':id/edit-product', component:EditProductComponent}
    ]
      }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    CategoryComponent,
    AddProductComponent,
    ProductDetailComponent,
    EditProductComponent,
  ],
  entryComponents: [
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // ProductService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
