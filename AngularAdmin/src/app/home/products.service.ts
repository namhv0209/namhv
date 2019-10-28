import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product} from './../model/product';

const productUrl = "http://localhost:3000/products";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private extractData(res: Response) {
    let body = res;
    return body || {}
  }

  product: Product [] = [];

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(productUrl).pipe(
      map(this.extractData)
    );
  }

  getProducts(id:number): Observable<any> {
    return this.http.get(productUrl + '/' + id).pipe(
      map(this.extractData)
    );
  }

  addProduct(datapro): Observable<any> {
    return this.http.post(productUrl, JSON.stringify(datapro), httpOptions).pipe(
      map(this.extractData)
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(productUrl + '/' + product.id, JSON.stringify(product), httpOptions).
    // pipe(
    //   tap(_ => console.log(`updated product id=${product.id}`)),
    // );
    pipe(
      map(this.extractData)
    );
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(productUrl + '/' +id, httpOptions).pipe(
      map(this.extractData)
    );
  }


  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
