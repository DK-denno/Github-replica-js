import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../request/api-request.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
    providers: [ApiRequestService];
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
