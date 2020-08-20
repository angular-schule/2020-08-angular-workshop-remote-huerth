import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
