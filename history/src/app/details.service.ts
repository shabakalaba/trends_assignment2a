import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { War } from './details';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {

  private handleError(error: HttpErrorResponse){
    console.log(error.message);
    return throwError('Something bad happened');
  }

  getAll(): Observable<War[]> {
    console.log(this.http.get<War[]>('http://bradmwcampbell.com/api/warAPI.php?apikey=apikey1234'));
    return this.http.get<War[]>('http://bradmwcampbell.com/api/warAPI.php?apikey=apikey1234').pipe(catchError(this.handleError));
  }

  getSingle(): Observable<War>{
    return this.http.get<War>('http://bradmwcampbell.com/api/warAPI.php?apikey=apikey1234&id=1').pipe(catchError(this.handleError));
  }

  constructor(private http: HttpClient) { }
}