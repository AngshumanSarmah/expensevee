import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }
  totalBudget:number;
  totalExpense:number;
  percentage:number;
  ngOnInit() {
    this.totalBudget = +localStorage.getItem('totalLimit');
    this.totalExpense = +localStorage.getItem('totalExpense');
    this.percentage = (this.totalExpense/this.totalBudget)*100;    
  }

}
