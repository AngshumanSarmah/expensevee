import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  showPieCharts:boolean;
  tableData = [];
  constructor() { }

  ngOnInit() {
    let catArray = JSON.parse(localStorage.getItem('categories'));    
    let expenses = JSON.parse(localStorage.getItem('expenseArray'));
    if(catArray && catArray.length<5 && expenses && expenses.length>0)
      this.showPieCharts = true;
    else if(expenses && expenses.length>0){
      for (let index = 0; index < catArray.length; index++) {
        this.tableData.push({name:catArray[index].category});      
      }
      for (let j = 0; j < this.tableData.length; j++) {
        for (let i = 0; i < expenses.length; i++) {
          if(this.tableData[j].name === expenses[i].category){
            console.log(expenses[i].amount);
            this.tableData[j].amount = this.tableData[j].amount ? this.tableData[j].amount : 0;
            this.tableData[j].amount = this.tableData[j].amount + +expenses[i].amount;
          }
        }
      }      
    }
    }

  }

