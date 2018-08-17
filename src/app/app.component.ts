import { Component } from '@angular/core';
import { ApiRequestService } from './request/api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiRequestService],
})
export class AppComponent {
  title = 'GITHUB';
}
