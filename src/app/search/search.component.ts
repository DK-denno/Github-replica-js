import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../request/api-request.service';
import { HttpClient } from '@angular/common/http';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import { environment } from '../../environments/environment';
import { Search } from '../search';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiRequestService],
})
export class SearchComponent implements OnInit {


  return$;

  constructor( private http: HttpClient, public  _service: ApiRequestService) { }

  search(keyword) {
    this._service.searching(keyword.value).subscribe(data => {
      this.return$ = data;
      console.log(this.return$);


    // this.http.get
    // ('https://api.github.com/search/users?q=' + keyword.value )
    // .subscribe(data => {
    //   this.return$ = data.items;
    //   console.log(this.return$);
    //   // console.log(this.return$.items[0].login);

    });
    // console.log(return$.data.items[0].login);
  //
  // this.http.get
  // ('https://api.github.com/search/repositories?q=' + keyword.value )
  // .subscribe(result => {
  //       this.return$ = result;
  //       console.log(result);
  // });
  //
}
  ngOnInit() {
  }

}
