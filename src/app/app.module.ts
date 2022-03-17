import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { StudentsComponent } from './students/students.component';
import { AddBookInventoryComponent } from './add-book-inventory/add-book-inventory.component';
import { CheckInventoryComponent } from './check-inventory/check-inventory.component';
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrarianComponent,
    StudentsComponent,
    AddBookInventoryComponent,
    CheckInventoryComponent,
    BorrowRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
