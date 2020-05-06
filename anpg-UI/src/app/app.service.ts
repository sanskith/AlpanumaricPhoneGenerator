import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {

  constructor(private http: HttpClient) {

  }


  getData(phoneNumber: any){
    return this.http.get('http://localhost:8081/phone/'+phoneNumber);
  }

}
