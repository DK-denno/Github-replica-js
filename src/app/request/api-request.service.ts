import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  frontpage() {
         return this.http.get('https://api.github.com/users/dk-denno?access_token=' + environment.key);

       }
      repository() {
          return this.http.get('https://api.github.com/users/dk-denno/repos' + environment.key);

      }
  constructor(private http: HttpClient) {

   }






}
