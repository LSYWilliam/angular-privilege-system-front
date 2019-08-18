import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import {throwError} from "rxjs/index";

@Injectable()
export class AppConfig {

    private env: Object = null;

    constructor(private http: HttpClient) {}

    public getEnv(key: any) {
        return this.env[key];
    }

    public getAll() {
        return this.env;
    }

    public load() {
        return new Promise((resolve) => {
            this.http.get('assets/env.json').pipe(catchError( (error: any) => {
              resolve(true);
              return throwError(error || 'Server error');
            })).subscribe( (response) => {
                this.env = response;
                resolve(true);
            })
        });
    }
}
