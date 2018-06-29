import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private handleError(error: HttpErrorResponse){
    console.log(error.message);


    return throwError('Something bad happened');
  }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('http://sophiavong.com/apis/countriesapi.php?apikey=brad').pipe(catchError(this.handleError)); //End point from the API
  }

  getCountry(num): Observable<Country>{
    console.log(num);
    return this.http.get<Country>('http://sophiavong.com/apis/countriesapi.php?apikey=brad&id='+num).pipe(catchError(this.handleError));
  }

  constructor(private http: HttpClient) { }
}