import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  frontpage() {
         return this.http.get('https://api.github.com/users/dk-denno?access_token=' + environment.apiUrl);

       }
  repository() {
      return this.http.get('https://api.github.com/users/dk-denno/repos');
  }

  searching(keyword) {
    return this.http.get
    ('https://api.github.com/search/users?q=' + keyword );

  }
  constructor(private http: HttpClient) {}

}
