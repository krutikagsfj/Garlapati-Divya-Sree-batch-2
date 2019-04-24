import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor(private http:HttpClient)
   { }
    xyz()
    {
      let url="/assets/productbrands.json";
      return this.http.get(url);
    }
   
  }
