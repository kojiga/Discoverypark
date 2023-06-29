
import { Component,OnInit } from '@angular/core';

import { Offers } from './Models/Offer';
import { OfferserviceService } from './Services/offerservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  mltime: string = '09.00 A.M';
  mhtime: string = '09.00 A.M';
  eltime: string = '09.00 A.M';
  ehtime: string = '09.00 A.M';
  mlnewtime!:string;
  mhnewtime!:string;
  elnewtime!:string;
  ehnewtime!:string;



  constructor(){}

  ngOnInit(): void {


  }
  updateVariable() {
    this.mltime = this.mlnewtime !== undefined ? this.mlnewtime : this.mltime;
  this.mhtime = this.mhnewtime !== undefined ? this.mhnewtime : this.mhtime;
  this.eltime = this.elnewtime !== undefined ? this.elnewtime : this.eltime;
  this.ehtime = this.ehnewtime !== undefined ? this.ehnewtime : this.ehtime;
  }

  title ='Reactiveform5'

}
