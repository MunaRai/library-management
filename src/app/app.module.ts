import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibrarianComponent } from './librarian/librarian.component';
import { AddBookInventoryComponent } from './librarian/add-book-inventory/add-book-inventory.component';
import { BorrowRequestComponent } from './librarian/borrow-request/borrow-request.component';
import { StudentPageComponent } from './librarian/student-page/student-page.component';
import { CheckInventoryComponent } from './librarian/check-inventory/check-inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    LibrarianComponent,
    AddBookInventoryComponent,
    BorrowRequestComponent,
    StudentPageComponent,
    CheckInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
