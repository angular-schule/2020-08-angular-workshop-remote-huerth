import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { loadBooks } from '../store/book.actions';
import { selectLoading, selectAllBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(selectLoading));
  books$ = this.store.pipe(select(selectAllBooks));

  constructor(private rs: BookRatingService, private bs: BookStoreService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }

  doRateUp(book: Book): void {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(book: Book): void {
    /*this.books = this.books
      .map(b => book.isbn === b.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);*/
  }

}
