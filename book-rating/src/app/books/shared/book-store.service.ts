import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';
  // private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${isbn}`);
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book);
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books/search/${term}`);
  }
}
