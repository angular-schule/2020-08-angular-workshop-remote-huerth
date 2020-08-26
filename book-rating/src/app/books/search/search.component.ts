import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  results$: Observable<Book[]>;
  loading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.results$ = this.searchControl.valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.loading = false),
    );
  }

}


/*
Typeahead-Suche
- Suchbegriff mindestens 3 Zeichen lang (mit RxJS)
- nicht zu viele Suchen starten, erst nachdem Nutzer für 1 s die Finger still hält
- (EXTRA: nicht zweimal denselben Begriff hintereinander suchen)
- HTTP-Request: this.bs.search()
- Ergebnisse darstellen (ganz simpel!!)
- (EXTRA: Ladeindikator)
*/
