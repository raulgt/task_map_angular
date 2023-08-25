import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { JobsDtoOut } from 'src/interfaces/Jobs/JobsDtoOut';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
const base_url = environment.base_url;
const _jsonURL = '../../assets/dbmock.json';


@Injectable({
  providedIn: 'root',
})
export class JobLocationService {
  constructor(private http: HttpClient, private router: Router) {

  }

  public getJSON(): Observable<any> {
    return this.http.get(_jsonURL);
  }

  getJobs(): Observable<JobsDtoOut> {
    return this.http.get<JobsDtoOut>(`${_jsonURL}`).pipe(
      map((res: JobsDtoOut) => {
        return res;
      }),
      catchError(this.handleError<any>('getJobs'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
