import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // muss vor detectChanges passieren
    component.book = {
      title: '',
      isbn: '',
      description: '',
      rating: 3,
      price: 5
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for doRateUp()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBeTruthy();
    expect(emittedBook).toBe(component.book);
  });
});
