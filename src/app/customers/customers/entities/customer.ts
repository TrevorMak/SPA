import { Order } from 'src/app/orders/entities/order';
import { isEqual } from 'lodash';

export class Customer {

    private _id: number;
    get id(): number {
        return this._id;
    }
    set id(value: number)
    {
        this._id = value;
    }

    private _dob: Date;
    get dob(): Date {
        return this._dob;
    }
    set dob(value: Date)
    {
        this._dob = value;
    }
    
    private _emailAddress: string;
    get emailAddress(): string {
        return this._emailAddress;
    }
    set emailAddress(value: string)
    {
        this._emailAddress = value;
    }

    private _firstName: string;
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string)
    {
        this._firstName = value;
    }

    private _lastName: string;
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string)
    {
        this._lastName = value;
    }

    private _orders: Array<Order>;
    get orders(): Array<Order> {
        return this._orders;
    }
    set orders(value: Array<Order>)
    {
        this._orders = value;
    }
}