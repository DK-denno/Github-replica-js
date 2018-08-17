import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiRequestService } from './request/api-request.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
