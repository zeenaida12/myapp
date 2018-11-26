import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
            HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
