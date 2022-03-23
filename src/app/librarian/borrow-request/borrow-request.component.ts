import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-borrow-request',
  templateUrl: './borrow-request.component.html',
  styleUrls: ['./borrow-request.component.scss']
})
export class BorrowRequestComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
