import { Category } from "./category";

export interface ProductColors{
    colorCode:string;
    id:string;
    productImageColor:string
}
export interface ProductToSpec{
    productId:string;
    productToSpecId:string;
    spec:{
        icon?:string;
        id:string;
        specName:string;
        specValue:string
    };
    specId:string
}

export interface Product{
    id:string;
    avatar:string;
    productName:string;
    slug:string;
    sku:string;
    isSpecial:boolean;
    isBetSelling:boolean;
    price:number;
    description:string;
    videoLink:string;
    colors:ProductColors[];
    images:string[];
    productToSpec:ProductToSpec[];
    category: Category;
    createdAt?:string;
    updatedAt?:string;
}
