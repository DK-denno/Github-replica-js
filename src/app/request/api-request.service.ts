import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  apiUrl: string = environment.key;
  frontpage() {
         return this.http.get('https://api.github.com/users/dk-denno?access_token=' + environment.key);
         console.log('service');
       }

  constructor(private http: HttpClient) {

   }






}
