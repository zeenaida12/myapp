import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Book } from './dto/book';
import { BookserviceService } from './providers/bookservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _books: Book[];
  hasError: boolean;
  refreshing: boolean;
  title = 'Book List';
  constructor(private bookData:BookserviceService){
  }
  ngOnInit(){
    this.hasError=false;
    this.refreshing=true;
    this.bookData.getBooks()
    .pipe(finalize(()=>this.refreshing=false))
   .subscribe (()=>{
      this.bookData
      console.log(this.bookData)
     }
     , error => {
       this.hasError=true;
     }
   );
   }
 }







