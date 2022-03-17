import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.scss']
})
export class LibrarianComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      // this.name = params['name'];
    });
  }

}
