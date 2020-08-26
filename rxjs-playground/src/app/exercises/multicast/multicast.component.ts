import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, timer } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new ReplaySubject();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) { }

  ngOnInit() {
    /*******************************/

    // this.measureValues$ = this.mvs.getValues().pipe(shareReplay(5));

    this.measureValues$ = new ReplaySubject<number>(5);
    this.mvs.getValues().subscribe(this.measureValues$);


    // const myObs$ = new Observable(obs => {
    //   obs.next(Math.random());
    //   obs.complete();
    // });

    // myObs$.subscribe(e => console.log(e));
    // myObs$.subscribe(e => console.log(e));
    // myObs$.subscribe(e => console.log(e));
    // myObs$.subscribe(e => console.log(e));
    // myObs$.subscribe(e => console.log(e));


    /*******************************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
