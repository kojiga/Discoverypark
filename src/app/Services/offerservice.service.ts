
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Offers } from '../Models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferserviceService {

  constructor(private httpclient:HttpClient) { }
  baseurl="https://localhost:7267/api/Values";


  GetDrivers():Observable <Offers[]>{
    return this.httpclient.get<Offers[]>(this.baseurl);

  }
}
