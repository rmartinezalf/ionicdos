import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyserviceProvider Provider');
  }

  myApi(){
    return this.http.get('https://ghibliapi.herokuapp.com/films');
  }

  getArticles() {
    return this.http.get('http://172.30.6.231:3000/api/v1/productos');
  }

  addArticles(article:any) {
     return this.http.post('http://172.30.6.231:3000/api/v1/productos/',article)
  }
  delArticles(id:any) {
    return this.http.delete('http://172.30.6.231:3000/api/v1/productos/'+id)
 }
  // this.HttpHeaders().set("Auto", "this is my information");
}
