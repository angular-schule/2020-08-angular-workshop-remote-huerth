import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let ratingMock;
  let book: Book;

  beforeEach(async(() => {
    book = {
      title: '',
      description: '',
      isbn: '',
      rating: 5,
      price: 4
    };

    // Duck Typing
    ratingMock = {
      rateUp: () => book
    };

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for doRateUp()', () => {
    const rs = TestBed.inject(BookRatingService);
    // rs.rateUp überwachen
    // Call zum originalen rs durchleiten und nicht blockieren
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.doRateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
  });
});
