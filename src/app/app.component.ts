
import { Component,OnInit } from '@angular/core';

import { Offers } from './Models/Offer';
import { OfferserviceService } from './Services/offerservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  myVariable: string = '09.00 A.M.';
  newvariable!:string;



  constructor(){}

  ngOnInit(): void {


  }
  updateVariable() {
    this.myVariable=this.newvariable;
  }

  title ='Reactiveform5'

}
