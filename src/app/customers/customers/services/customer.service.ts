import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../entities/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService {

  private baseUrl: string = "/customers"

  // json-server --watch db.json
  //npm run start:proxy

  constructor(private http: HttpClient) {
  }

  public create(customer: any): Observable<any> {
    return this.http.post(this.baseUrl, customer)
            .pipe(map((data: any) => {
                return data;
            }));
  }

  public delete(id: number): Observable<object>
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  public getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getById(id: number): Observable<any> {
    return this.http.get<Customer>(`${this.baseUrl}/${id}`);
  }

  public update(customer: Customer): Observable<object>
  {
    return this.http.put(`${this.baseUrl}/${customer.id}`, customer);
  }
}
