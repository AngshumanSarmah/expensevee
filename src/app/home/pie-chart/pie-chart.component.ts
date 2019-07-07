import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public labels:string[]=[];
  public chartData=[];
  public chartType="pie";
  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    let catArray = JSON.parse(localStorage.getItem('categories'));
    let expenses = JSON.parse(localStorage.getItem('expenseArray'));
    if(expenses && expenses.length>0){
      for (let index = 0; index < catArray.length; index++) {
        this.labels.push(catArray[index].category);      
      }
      for (let j = 0; j < this.labels.length; j++) {
        for (let i = 0; i < expenses.length; i++) {
          if(this.labels[j] === expenses[i].category){
            this.chartData[j] = this.chartData[j] ? this.chartData[j] : 0;
            this.chartData[j] = this.chartData[j] + +expenses[i].amount;
          }
        }
      }
    }
  }
}
