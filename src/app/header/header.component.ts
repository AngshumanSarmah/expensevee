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
    this._opened = !this._opened;
  }

}
