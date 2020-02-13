export class Item {

    private _id: number;
    get id(): number {
        return this._id;
    }
    set id(value: number)
    {
        this._id = value;
    }

    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(value: string)
    {
        this._name = value;
    }
    
}