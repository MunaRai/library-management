import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-borrow-request',
  templateUrl: './borrow-request.component.html',
  styleUrls: ['./borrow-request.component.scss']
})
export class BorrowRequestComponent implements OnInit {
  borrowListFromLocalStorage:any=[];
  allBooksReturn:string = "";
  noBorrow:boolean=true;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    const tokenFromLocalStorage = localStorage.getItem("Borrow"); 
  if(tokenFromLocalStorage)
  {
    this.noBorrow=false; 
    this.borrowListFromLocalStorage=JSON.parse(tokenFromLocalStorage);
    // console.log(this.borrowListFromLocalStorage[0][1]);
  }
  else{
    this.noBorrow=true;
  }
  
  }

  ////////////////////////////////////////////////////////
  checkOut(i:number){
    // console.log("enters here");
    this.borrowListFromLocalStorage.splice(i,1);
   
    localStorage.setItem("Borrow",JSON.stringify(this.borrowListFromLocalStorage));
    if(this.borrowListFromLocalStorage=[])
    {
      localStorage.removeItem('Borrow');
    } 
    // console.log(this.borrowListFromLocalStorage);
  }

}
