import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ProjectListService {

    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(pageIndex: number,
             pageSize: number,
             sortField: string,
             sortOrder: string,
             genders: string[]): Observable<{}> {
        let params = new HttpParams()
            .append('page', `${pageIndex}`)
            .append('results', `${pageSize}`)
            .append('sortField', sortField)
            .append('sortOrder', sortOrder);

        genders.forEach(gender => {
            params = params.append('gender', gender);
        });

        return this.http.get(`${this.randomUserUrl}`, {
            params
        });
    }

    constructor(private http: HttpClient) {
    }

}
