import { Product } from '../../products/entities/product';
import { Customer } from 'src/app/customers/customers/entities/customer';

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

    private _customer: Customer;
    get customer(): Customer {
        return this._customer;
    }
    set customer(value: Customer)
    {
        this._customer = value;
    }

    private _products: Array<Product>;
    get products(): Array<Product> {
        return this._products;
    }
    set products(value: Array<Product>) {
        this._products = value;
    }

    private _total: number;
    get total(): number {
        return this._total;
    }
    set total(value: number) {
        this._total = value;
    }
}