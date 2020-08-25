import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Output() submitBook = new EventEmitter<Book>();
  bookForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      description: new FormControl(''),
      price: new FormControl(0, Validators.min(2))
    });
  }

  submitForm(): void {
    const newBook: Book = {
      ...this.bookForm.value,
      rating: 1
    };
    this.submitBook.emit(newBook);
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.invalid && control.touched;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.touched;
  }

}


/*
Button
nur abschicken wenn valide
Abschicken
Buch erzeugen
Event
HTTP
Routing
*/
