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
        console.log(categoriesString);
        if(categoriesString){
            let categories = JSON.parse(categoriesString);
            for (let index = 0; index < categories.length; index++) {
                console.log(categories[index]);
                this.categories[index] = new CategoryDetails(categories[index].category,categories[index].status)                
            }
            
            this.categoriesSub.next(this.categories); 
        }
    }

    addCategory(category: CategoryDetails){
        console.log(category,this.categories);
        this.categories.push(category);
        localStorage.setItem("categories",JSON.stringify(this.categories));
        this.categoriesSub.next(this.categories);            

    }

    deleteCategory(id:number,status:string){
        console.log("in", id);
        
        let categoriesString  = JSON.parse(localStorage.getItem('categories'));
        if(categoriesString && categoriesString[id]){
            this.categories[id].setStatus(status);
            localStorage.setItem("categories",JSON.stringify(this.categories));
            console.log(this.categories);
            this.categoriesSub.next(this.categories);            
        }
    }

    getCategoryStatus(id:number){
        // console.log(id);
        let categoriesString  = JSON.parse(localStorage.getItem('categories'));
        // console.log(categoriesString[id]);
        if(categoriesString && categoriesString.length>0){
            return categoriesString[id].deleteStatus;

        }
    }
}