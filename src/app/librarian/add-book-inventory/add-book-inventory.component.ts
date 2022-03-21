import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibrarianModel } from '../librarian.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-book-inventory',
  templateUrl: './add-book-inventory.component.html',
  styleUrls: ['./add-book-inventory.component.scss']
})
export class AddBookInventoryComponent implements OnInit {

  formValue !: FormGroup;
  //creating object to parse this object to the server for posting our data
  librarianModelObj : LibrarianModel = new LibrarianModel();
  librarianData !: any;
  
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit(){
   this.formValue = this.formbuilder.group({
     bookId: [''],
     bookName: [''],
     authorName: [''],
     quantity: [''],
     faculty: ['']
   })

   this.getAllBook();
  }

  //Making use of obj "librarianModelObj" to post our data

  postLibrarianDetails(){
    this.librarianModelObj.bookId = this.formValue.value.bookId;
    this.librarianModelObj.bookName = this.formValue.value.bookName;
    this.librarianModelObj.authorName = this.formValue.value.authorName;
    this.librarianModelObj.quantity = this.formValue.value.quantity;
    this.librarianModelObj.faculty = this.formValue.value.faculty;

    this.api.postLibrarian( this.librarianModelObj )
    .subscribe( (res:any) =>{
      console.log(res);
      alert("Book Added Successfully")
      //to cancel the addbook form
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllBook();
    },
      (err:any) =>{
      alert("Error Occured");
    })
  }

  //To show the data on the table
  getAllBook(){
    this.api.getLibrarian().subscribe(res => {
      this.librarianData = res;
    })
  }

  //To delete the data on the table
  deleteBook(row : any){
    this.api.deleteLibrarian(row.id).subscribe((res:any) =>{
      alert("Book Deleted");
      this.getAllBook();
    })
  }

}