import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  frontpage() {
          alert('done');
         return this.http.get('https://api.github.com/users/dk-denno?access_token=a61492493ca0373acb3069fb9943dbb9b9f07387');
         console.log('service');
       }

  constructor(private http: HttpClient) {

   }






}
