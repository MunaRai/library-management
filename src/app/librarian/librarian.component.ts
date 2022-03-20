import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibrarianModel } from './librarian.model';
import { error } from 'console';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.scss']
})
export class LibrarianComponent implements OnInit {

  formValue !: FormGroup;
  //creating object to parse this object to the server for posting our data
  librarianModelObj : LibrarianModel = new LibrarianModel();
  api: any;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(){
   this.formValue = this.formbuilder.group({
     bookId: [''],
     bookName: [''],
     authorName: [''],
     quantity: [''],
     faculty: ['']
   })
  }

  //Making use of obj "librarianModelObj" to post our data
  postLibrarianDetails(){
    this.librarianModelObj.bookId = this.formValue.value.bookId;
    this.librarianModelObj.bookName = this.formValue.value.bookName;
    this.librarianModelObj.authorName = this.formValue.value.authorName;
    this.librarianModelObj.quantity = this.formValue.value.quantity;
    this.librarianModelObj.faculty = this.formValue.value.faculty;

    this.api.postLibrarian(this.librarianModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Book Added Successfully");
    },
      (err: any)=>{
      alert("Error Occured");
    })
  }

}