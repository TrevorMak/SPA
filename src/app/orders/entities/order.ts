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
}