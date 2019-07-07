import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expenses.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseDetails } from 'src/app/model/expense-details.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoryDetails } from 'src/app/model/category.model';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {
  expenseForm : FormGroup;
  editFlag: boolean;// this flag will help determine if its edit or add operation
  edit_id: number; // for edit case, this will store the index of the edited expense details
  expenseObj: ExpenseDetails; //if we are comming to this component from edit, we are getting the existing data, to pre populate on edit component
  categories:string[] = [];
  constructor(private expenseService:ExpenseService,
              private categoryService:CategoriesService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }
  ngOnInit() {
    let categories = JSON.parse(localStorage.getItem('categories'));
    if(categories && categories.length>0){
      for (let index = 0; index < categories.length; index++) {
        if(categories[index].deleteStatus != "1"){
          this.categories.push(categories[index].category);          
        }
      }
    }
    this.activatedRoute.params.subscribe(
      (param: Params)=>{
          this.editFlag = param["id"] ? true : false;
          this.edit_id = +param["id"];
          if(this.editFlag){
            this.expenseObj = this.expenseService.getExpenseDetailsById(this.edit_id);            
            if(this.expenseObj){
              this.expenseForm = new FormGroup({
                'category': new FormControl(this.expenseObj.getCategory()),
                'name' : new FormControl(this.expenseObj.getName(),[Validators.required,Validators.pattern('^[a-zA-Z]*$')]),
                'amount' : new FormControl(this.expenseObj.getAmount(),[Validators.required,Validators.pattern('^[0-9]*$')]),
                'date' : new FormControl(this.expenseObj.getDate(),Validators.required),
              })
            }else{
              this.router.navigate(["error"]);
            }            
          }else{
            this.expenseForm = new FormGroup({
              'category': new FormControl("Select"),
              'name' : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$')]),
              'amount' : new FormControl(null,[Validators.required,Validators.pattern('^[0-9]*$')]),
              'date' : new FormControl(null,Validators.required),
            })
          }
      }
    )
  }

  //this method is used to update or add a expense detail
  updateAddExpense(){
    let dateFormat = this.expenseForm.value.date.split('-');
    dateFormat = dateFormat[2]+'.'+dateFormat[1]+'.'+dateFormat[0];
    let expenseObj:ExpenseDetails = new ExpenseDetails(this.expenseForm.value.category,this.expenseForm.value.name,
                                                      this.expenseForm.value.amount,dateFormat)                                                      
    if(this.editFlag){
      this.expenseService.updateExpense(this.edit_id,expenseObj)
    }else{
      this.expenseService.addExpense(expenseObj);      
    }
    this.router.navigate(["/"]);    
  }

  //this method is used to select the option from drop down
  compare(val1:string, val2:string) {
    return val1 === val2;
  }

  //this method is used to clear the form fields
  resetForm(){
    this.expenseForm.reset();
  }

}
