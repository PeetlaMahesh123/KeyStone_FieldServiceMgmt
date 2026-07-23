export type Inventory = {

    id:number;

    partCode:string;

    partName:string;

    category:string;

    supplier:string;

    quantity:number;

    unitPrice:number;

    location:string;

    minimumStock:number;

    status:"In Stock"|"Low Stock"|"Out Of Stock";

};