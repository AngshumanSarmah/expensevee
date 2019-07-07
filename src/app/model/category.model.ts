export class CategoryDetails {
    constructor(private category:string, private deleteStatus:string){}
    getCategory(){
        return this.category;
    }
    getStatus(){
        return this.deleteStatus;
    }
    setStatus(state:string){
        this.deleteStatus = state;
    }
}