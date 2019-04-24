import { Component, OnInit } from '@angular/core';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.css']
})
export class CarbrandsComponent implements OnInit {

  constructor(private ser:MyservService) { }
arr:any=[];

  ngOnInit() 
  {
    this.ser.xyz().subscribe(ref=>  //here we are calling the method given in the service class
      {
        this.arr=ref;
        console.log(ref);     //prints the objects in the console screen

    }),error=>
    {
      console.log(error);
    }

  }


}
