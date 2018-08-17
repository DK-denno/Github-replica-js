import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) {
   }

   frontpage() {
       this.http.get('https://api.github.com/users/dk-denno');
       console.log('service');
     }
}
