import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openAdd(){
    this.router.navigate(["add"])
  }

}
