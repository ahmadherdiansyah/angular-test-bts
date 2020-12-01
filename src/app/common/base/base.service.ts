import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  genericError = "";
  env = environment;
  constructor(public http: HttpClient) {
    this.genericError = `Some Error occcured, Please contact Administrator for the Errors`;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  post(url: string, body: object): Observable<T> {
    return this.http
      .post<T>(this.env.api_url + url, body).pipe(
        catchError(this.handleError)
      );
  }
  get(url: string): Observable<T>{
    return this.http.get<T>(this.env.api_url + url).pipe(
      catchError(this.handleError)
    );
  }
}
