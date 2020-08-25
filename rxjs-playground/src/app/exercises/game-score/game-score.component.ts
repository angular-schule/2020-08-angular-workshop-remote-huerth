import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, of } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new ReplaySubject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /******************************/

    this.score$.pipe(
      scan((acc, item) => acc + item, 0)
    ).subscribe(score => this.currentScore = score);

    this.score$.pipe(
      reduce((acc, item) => acc + item, 0)
    ).subscribe(score => this.finalScore = score);

    of(
      { type: 'setname', value: 'Ferdinand' },
      { type: 'setcity', value: 'Leipzig' },
      { type: 'setname', value: 'Malcher' },
      { type: 'setbooks', value: [] },
    ).pipe(
      scan((acc, item) => {
        switch (item.type) {
          case 'setname': return { ...acc, name: item.value };
          case 'setcity': return { ...acc, city: item.value };
          default: return acc;
        }
      }, {})
    ).subscribe(e => console.log(e));

    /******************************/

    this.score$.subscribe({
      next: value => this.logStream$.next(value),
      complete: () => this.logStream$.next('❌ COMPLETED')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
