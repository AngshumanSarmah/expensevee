import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CategoryDetails } from "../model/category.model";

@Injectable({
    providedIn: 'root',
})
export class CategoriesService{
    categories:CategoryDetails[] = [];
    categoriesSub = new Subject();

    getAllCategories(){
        let categoriesString  = localStorage.getItem('categories');
        if(categoriesString){
            let categories = JSON.parse(categoriesString);
            for (let index = 0; index < categories.length; index++) {
                this.categories[index] = new CategoryDetails(categories[index].category,categories[index].status)                
            }
            
            this.categoriesSub.next(this.categories); 
        }
    }

    addCategory(category: CategoryDetails){
        this.categories.push(category);
        localStorage.setItem("categories",JSON.stringify(this.categories));
        this.categoriesSub.next(this.categories);            
    }

    deleteCategory(id:number,status:string){        
        let categoriesString  = JSON.parse(localStorage.getItem('categories'));
        if(categoriesString && categoriesString[id]){
            this.categories[id].setStatus(status);
            localStorage.setItem("categories",JSON.stringify(this.categories));
            this.categoriesSub.next(this.categories);            
        }
    }

    getCategoryStatus(id:number){
        let categoriesString  = JSON.parse(localStorage.getItem('categories'));
        if(categoriesString && categoriesString.length>0){
            return categoriesString[id].deleteStatus;
        }
    }
}