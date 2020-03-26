import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../entities/order';

@Injectable()
export class OrderService {

    private baseUrl: string = "https://localhost:44382/api/orders"

    constructor(private http: HttpClient) {
    }

    public create(order: any): Observable<any> {
        return this.http.post(this.baseUrl, order)
            .pipe(map((data: any) => {
                return data;
            }));
    }

    public delete(id: number): Observable<object> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    public getAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    public getById(id: number): Observable<any> {
        return this.http.get<Order>(`${this.baseUrl}/${id}`);
    }
}
