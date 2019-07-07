import { ExpenseDetails } from "../model/expense-details.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class ExpenseService{
    expenseArraySub = new Subject();
    expensesArray:ExpenseDetails[]= [];  
    getExpensesArray(){
        const expensesArray = JSON.parse(localStorage.getItem('expenseArray'));
        if(expensesArray){
            for (let index = 0; index < expensesArray.length; index++) {
                this.expensesArray[index] = new ExpenseDetails(expensesArray[index].category,expensesArray[index].name,
                                                expensesArray[index].amount,expensesArray[index].date)
                
            }
            this.expenseArraySub.next(this.expensesArray.slice());
            return this.expensesArray
        }
        return;
    }

    getExpenseDetailsById(id:number){
        let expenseArray = this.getExpensesArray()        
        if(expenseArray && expenseArray[id]){            
            let dateVal = expenseArray[id].getDate().split('.');
            expenseArray[id].setDate(dateVal[2]+"-"+dateVal[1]+"-"+dateVal[0]);
            return expenseArray[id];
        }
        else
            return;
    }

    updateExpense(id:number,expenseObj:ExpenseDetails){
        this.expensesArray[id] = expenseObj;
        localStorage.setItem('expenseArray',JSON.stringify(this.expensesArray));
        let totalExpense: number = 0;
        for (let index = 0; index < this.expensesArray.length; index++) {
            totalExpense = totalExpense + +this.expensesArray[index].getAmount();
        }        
        localStorage.setItem('totalExpense',JSON.stringify(totalExpense));
        this.expenseArraySub.next(this.expensesArray.slice());
    }

    addExpense(expenseObj:ExpenseDetails){
        let totalExpense: number = 0;
        this.expensesArray.push(expenseObj);
        for (let index = 0; index < this.expensesArray.length; index++) {
            totalExpense = totalExpense + +this.expensesArray[index].getAmount();
        }        
        localStorage.setItem('expenseArray',JSON.stringify(this.expensesArray));
        localStorage.setItem('totalExpense',JSON.stringify(totalExpense));

        this.expenseArraySub.next(this.expensesArray.slice());
    }
}