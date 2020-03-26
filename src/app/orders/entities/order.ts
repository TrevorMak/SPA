import { Product } from '../../products/entities/product';
import { Customer } from 'src/app/customers/customers/entities/customer';
import { ProductCost } from 'src/app/products/entities/product-cost';

export class Order {

    private _id: number;
    get id(): number {
        return this._id;
    }
    set id(value: number)
    {
        this._id = value;
    }

    private _dateCreated: Date;
    get dateCreated(): Date {
        return this._dateCreated;
    }
    set dateCreated(value: Date)
    {
        this._dateCreated = value;
    }

    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(value: string)
    {
        this._name = value;
    }

    private _customerId: number;
    get customerId(): number {
        return this._customerId;
    }
    set customerId(value: number)
    {
        this._customerId = value;
    }

    private _customer: Customer;
    get customer(): Customer {
        return this._customer;
    }
    set customer(value: Customer)
    {
        this._customer = value;
    }

    private _productsCosts: Array<ProductCost> = new Array<ProductCost>();
    get productsCosts(): Array<ProductCost> {
        return this._productsCosts;
    }
    set productsCosts(value: Array<ProductCost>) {
        this._productsCosts = value;
    }

    private _total: number;
    get total(): number {
        return this._total;
    }
    set total(value: number) {
        this._total = value;
    }
}