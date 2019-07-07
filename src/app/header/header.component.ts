import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Angular 4';
  private _opened: boolean = false;

  private _toggleSidebar() {
    console.log("ias");
    console.log(this._opened);
    
    this._opened = !this._opened;
  }

}
