import { Component, OnInit } from '@angular/core';
import { Librarian } from '../model/librarian.interface';
import { ApiService } from 'src/app/shared/api.service';
import { NgForm } from '@angular/forms';
import { StudentInterface } from '../student-page/student-interface';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  librarianData !: any;
  borrowList:Array<[]>=[];
  stds: Array<StudentInterface> = [];
  loginStudent: string = "name1";
  BookSearchText: string = '';
  bookPresent: boolean = false;
  listOfParticularBook: Array<{ id: number, bookName: string, authorName: string, quantity: number, faculty: string }> = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    const tokenFromLocalStorage = localStorage.getItem("studentArray");
    if (tokenFromLocalStorage) {
      this.stds = JSON.parse(tokenFromLocalStorage);
    }
    // else {
    //   this.stds = [{ id: 1, name: "sth", phone: 9, semester: 8 }];//just initialize random data
    // }
  }

  searching(val: string) {

    this.BookSearchText = val;

    // console.log(this.BookSearchText);
    this.api.getLibrarian().subscribe(res => {
      this.librarianData = res;

      var result = this.librarianData.map((a: any) => a.bookName);


      // console.log(result);    [cp,jh,s]

      for (var i = 0; i < result.length; i++) {
        if (this.BookSearchText == result[i]) {
          this.bookPresent = true;
          console.log(this.BookSearchText);
          this.listOfParticularBook.push(this.librarianData[i]);
          // break;
        }
      }

    })
  }

  selectStudent(std: string) {
    this.loginStudent = std;
    console.log(this.loginStudent);
  }


  //Borrow
  borrowBook(indexOfBorrow:number){
    // let x=[this.loginStudent, this.listOfParticularBook[indexOfBorrow]]
    // [[student,book],[student,book],[student,book]]
    // this.borrowList.push(x);
    console.log(this.loginStudent);

    console.log(this.listOfParticularBook[indexOfBorrow].bookName);
  }
}