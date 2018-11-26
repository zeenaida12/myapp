import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../dto/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  //giving the thing one object at a time
  @Input()
  book:Book;
  constructor() { }
  ngOnInit() {
  }

}
