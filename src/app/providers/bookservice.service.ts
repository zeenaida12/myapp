import { Observable, observable } from 'rxjs';
import { Book } from './../dto/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private _books:Book[];


  constructor(private _httpClient: HttpClient) {
  }


public getBooks(): Observable<any> {
    return new Observable(observable => {
      let url = 'http://super-crud.herokuapp.com/books';
      this._httpClient.get(url)
        .pipe(finalize(() => observable.complete()))
        .subscribe(
          (data: any) => {
            //initialise the array
            this._books = [];
            // Code to set add books
            data.books.forEach(element => {
              this._books.push({
                _id: element._id,
                title: element.title,
                author: element.author,
                image: element.image,
                releaseDate: element.releaseDate,
		            _v: element._v
              });
            });
            observable.next(this._books);

          }, error => {
            observable.error(error);

          }
        );
    });
  }


}



