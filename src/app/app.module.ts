import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ApiRequestService } from './request/api-request.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'frontpage', component: FrontpageComponent },
  {path: 'search', component: SearchComponent },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FrontpageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
