import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ExpenseService } from '../services/expenses.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { CategoryDetails } from '../model/category.model';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm : FormGroup;
  categories: CategoryDetails[];
  constructor(private expenseService: ExpenseService,
              private categoryService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.categoryService.getAllCategories();
    this.initializeForm();
    this.categoryService.categoriesSub.subscribe(
      (categoryList:CategoryDetails[])=>{
        this.categories = categoryList;
        console.log(categoryList);
        
      }
    )
  }
  
  addCategory(){
    this.categoryService.addCategory(new CategoryDetails(this.settingsForm.value.category,"0"));
    // this.categories = this.categoryService.categories;
  }

  initializeForm(){
    this.categories = this.categoryService.categories;
    let limit = localStorage.getItem('totalLimit') ? localStorage.getItem('totalLimit')  : null;
    this.settingsForm = new FormGroup({
      "totalLimit": new FormControl(limit,[Validators.required,Validators.pattern('^[0-9]*$')]),
      "category": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$')])
    })
  }

  updateBudgetAmount(){
    localStorage.setItem('totalLimit',this.settingsForm.value.totalLimit);
  }

}
