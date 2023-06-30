
import { isPlatformBrowser } from '@angular/common';
import { Offers } from './Models/Offer';
import { OfferserviceService } from './Services/offerservice.service';
import { EmployeeService } from './Services/employee.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  buttonText: string = 'UpdateTime';
  myVariable1!: string;
  myVariable2!: string;
  myVariable3!: string;
  myVariable4!: string;

  mltime!: string ;
  mhtime!: string ;
  eltime!: string ;
  ehtime!: string ;



  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Code that uses localStorage
      let storedValue1 = localStorage.getItem('mltime');
    this.myVariable1 = storedValue1!== null ? JSON.parse(storedValue1) : null;
    let storedValue2 = localStorage.getItem('mhtime');
    this.myVariable2= storedValue2 !== null ? JSON.parse(storedValue2) : null;
    let storedValue3 = localStorage.getItem('eltime');
    this.myVariable3 = storedValue3 !== null ? JSON.parse(storedValue3) : null;
    let storedValue4 = localStorage.getItem('ehtime');
    this.myVariable4 = storedValue4 !== null ? JSON.parse(storedValue4) : null;
    }



  }

  showForm: boolean = false;

  toggleForm() {
    this.mltime = this.myVariable1 !== undefined ? this.myVariable1 : this.mltime;
    this.mhtime = this.myVariable2 !== undefined ? this.myVariable2 : this.mhtime;
    this.eltime = this.myVariable3 !== undefined ? this.myVariable3 : this.eltime;
    this.ehtime = this.myVariable4 !== undefined ? this.myVariable4 : this.ehtime;
    localStorage.setItem('mltime',JSON.stringify(this.mltime));
    localStorage.setItem('mhtime',JSON.stringify(this.mhtime));
    localStorage.setItem('eltime',JSON.stringify(this.eltime));
    localStorage.setItem('ehtime',JSON.stringify(this.ehtime));

    this.showForm = !this.showForm;
    this.buttonText = this.showForm ? 'Done' : 'UpdateTime';
  }








  title = 'Reactiveform5';
}
