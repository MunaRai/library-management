import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibrarianComponent} from './librarian/librarian.component'; 
import { AddBookInventoryComponent } from './librarian/add-book-inventory/add-book-inventory.component';
import { BorrowRequestComponent } from './librarian/borrow-request/borrow-request.component';
import { StudentPageComponent } from './librarian/student-page/student-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { BookSearchComponent } from './librarian/book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent, 
    LibrarianComponent,
    AddBookInventoryComponent,
    BookSearchComponent,
    BorrowRequestComponent,
    StudentPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
