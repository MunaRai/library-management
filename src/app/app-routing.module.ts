import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianComponent } from './librarian/librarian.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'librarian-component', component: LibrarianComponent},
  {path: 'students-component', component: StudentsComponent},
  {path: '', redirectTo: '/librarian-component', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
