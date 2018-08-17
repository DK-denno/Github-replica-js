import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRequestService } from '../request/api-request.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  providers: [ApiRequestService];
})
export class FrontpageComponent implements OnInit {

  display$;

  constructor(private http: HttpClient, public _service: ApiRequestService  ) { }

  ngOnInit() {
    this._service.frontpage().subscribe(data => {
      this.display$ = data;
      console.log(data);
    });
  }

}
