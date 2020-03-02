import { Product } from './product';

export class ProductCost {

    private _id: number;
    get id(): number {
        return this._id;
    }
    set id(value: number)
    {
        this._id = value;
    }

    private _product: Product;
    get product(): Product {
        return this._product;
    }
    set product(value: Product)
    {
        this._product = value;
    }

    private _quantity: number;
    get quantity(): number {
        return this._quantity;
    }
    set quantity(value: number)
    {
        this._quantity = value;
    }

    private _subtotal: number;
    get subtotal(): number {
        return this._subtotal;
    }
    set subtotal(value: number)
    {
        this._subtotal = value;
    }


}