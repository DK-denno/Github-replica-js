import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

import { ApiRequestService } from './request/api-request.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ZErrorComponent } from './z-error/z-error.component';


const routes: Routes = [
  {path: 'frontpage', component: FrontpageComponent },
  {path: 'search', component: SearchComponent },
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: '**', component: ZErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FrontpageComponent,
    ZErrorComponent,
    HighlightDirective
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
