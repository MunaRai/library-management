import { Component, OnInit } from '@angular/core';
import { Librarian } from '../model/librarian.interface';
import { ApiService } from 'src/app/shared/api.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  librarianData !: any;
  
  BookSearchText:string='';
  bookPresent:boolean=false;
  listOfParticularBook:Array<{id:number,bookName:string,authorName:string,quantity:number,faculty:string}>=[];
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searching(val:string) {
    
    this.BookSearchText=val;
    // console.log(this.BookSearchText);
    this.api.getLibrarian().subscribe(res => {
      this.librarianData = res;  
       
      var result = this.librarianData.map((a:any) => a.bookName);

      // console.log(result);    [cp,jh,s]

for(var i=0;i<result.length;i++)
{
  if(this.BookSearchText==result[i])
  {
    this.bookPresent=true;
    console.log(this.BookSearchText); 
    this.listOfParticularBook.push(this.librarianData[i]);    
    // break;
  }
}
     
      })
  }
}