import { FormControl, ValidatorFn, AsyncValidatorFn, AbstractControlOptions } from '@angular/forms';

export class BindableFormControl<T> extends FormControl {
    public constructor(protected object: T,
        protected propertyName: keyof T,
        validatorOrOpts?: ValidatorFn | Array<ValidatorFn> | AbstractControlOptions,
        asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn>) {
        super(object[propertyName], validatorOrOpts, asyncValidator);
        this.valueChanges.subscribe((value) => {
            this.setField(value);
        });
    }

    private setField(value: any)
    {
        (this.object as any)[this.propertyName] = value;
    }

}