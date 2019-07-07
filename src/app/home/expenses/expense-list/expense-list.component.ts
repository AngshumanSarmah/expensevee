import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expenses.service';
import { ExpenseDetails } from 'src/app/model/expense-details.model';

@Component({
  selector: 'expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  page:number=1;
  pageSize:number=3;
  collectionSize:number=1;
  showPagination:boolean; //this flag will show or hide pagination
  constructor(private expenseService: ExpenseService) { }
  expenseArray: ExpenseDetails[];
  ngOnInit() {
    this.expenseArray = this.expenseService.getExpensesArray();
    this.collectionSize = this.expenseArray ? this.expenseArray.length : 1;    
    if(this.expenseArray && this.expenseArray.length>this.pageSize){
      this.showPagination = true;
    }
    this.expenseService.expenseArraySub.subscribe(
      (expenseArray:ExpenseDetails[])=>{
        this.expenseArray = expenseArray;
      }
    )
  }
}
