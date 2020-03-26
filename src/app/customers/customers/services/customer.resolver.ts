import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Customer } from '../entities/customer';
import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CustomerResolver implements Resolve<Customer> {
    
    public constructor(private customerService: CustomerService, private router: Router){

    }

    public resolve(route: ActivatedRouteSnapshot): Observable<Customer> {

        const id = route.params["id"];
        if (isNaN(id)) {
            this.router.navigate(["/home"])
        }

        return this.customerService.getById(id);
    }

}