export class ExpenseDetails {
    constructor(private category:string, private name:string, private amount:number, private date:string){}
    getCategory(){
        return this.category;
    }
    getName(){
        return this.name;
    }
    getDate(){
        return this.date;
    }
    getAmount(){
        return this.amount;
    }

    setDate(date:string){
        this.date = date;
    }
}