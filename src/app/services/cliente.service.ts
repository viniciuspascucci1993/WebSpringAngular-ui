import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';

import { Cliente } from './cliente'

@Injectable()
export class ClienteService {
    private headers: Headers; 
    private options: RequestOptions;

    constructor( private http: Http ) {

        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers});
    }

    findAll(): Observable<Cliente[]> { 
        return this.http.get('http://localhost:8080/clientes')
                        .pipe(map(( res: Response ) => res.json()));
     }

    insert( cliente: Cliente ): Observable<Cliente> {
        return this.http
                    .post('http://localhost:8080/clientes', JSON.stringify(cliente), this.options)
                    .pipe(map((res: Response) => res.json()));
    }
}