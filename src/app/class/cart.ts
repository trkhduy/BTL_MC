import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Cart {
    id?: number;
    id_product?: number;
    id_category?: number;
    name?: any;
    img?: any;
    price?: any;
    quantity?: number
}