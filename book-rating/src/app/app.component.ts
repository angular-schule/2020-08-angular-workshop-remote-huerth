import { Component } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    const myObs$ = new Observable(obs => {
      obs.next('A');
      obs.next('B');
      obs.next('C');
      obs.complete();
      // of('A', 'B', 'C');
    });

    // myObs$.subscribe(e => console.log(e));

    // import { of, timer } from 'rxjs';
    // of(1,2,3,4,5,6,7)

    // import { map } from 'rxjs/operators';
    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE')
    });



    // Producer: Funktion, die Werte generiert
    // Producer kapseln in new Observable()
    // Producer: Argument Observer
    // Producer: ruft Methoden auf Observer auf

    // Observable subscriben => Observer oder Callbacks

    function producer(obs) {
      obs.next(1);

      setTimeout(() => {
        obs.next(3);
        obs.complete();
      }, 2000);
    }

    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE')
    };

    const myObservable$ = new Observable(producer);
    // myObservable$.subscribe(observer);
    // myObservable$.subscribe(e => console.log(e));
  }
}
