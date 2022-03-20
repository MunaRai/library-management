import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { LibrarianComponent } from './librarian/librarian.component';
import { AddBookInventoryComponent } from './librarian/add-book-inventory/add-book-inventory.component';
import { CheckInventoryComponent } from './librarian/check-inventory/check-inventory.component';
import { StudentPageComponent } from './librarian/student-page/student-page.component';
import { BorrowRequestComponent } from './librarian/borrow-request/borrow-request.component';

const routes: Routes = [
  {path: 'librarian-component', component: LibrarianComponent},
  {path: 'add-book-inventory-component', component: AddBookInventoryComponent},
  {path: 'check-inventory-component', component: CheckInventoryComponent},
  {path: 'student-page-component', component: StudentPageComponent},
  {path: 'borrow-request-component', component: BorrowRequestComponent},

  //redirect to Librarian component
  {path: '', redirectTo: '/librarian-component', pathMatch: 'full'},

  // Setting up wildcard route for 404 page
  // {path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddBookInventoryComponent, CheckInventoryComponent, StudentPageComponent, BorrowRequestComponent]
