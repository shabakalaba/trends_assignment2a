import { Injectable } from '@angular/core';
import { Country } from './country';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  countries : Country[] = [
    {id: 1, name: 'Soviet Union', stillACountry : false},
    {id: 2, name: 'United Kingdom', stillACountry: true},
    {id: 3, name: 'United States of America', stillACountry: true},
    {id: 4, name: 'China', stillACountry: true},
    {id: 5, name: 'Japan', stillACountry: true},
    {id: 6, name: 'Canada', stillACountry: true},
    {id: 7, name: 'Italy', stillACountry: true},
    {id: 8, name: 'Russia', stillACountry: true},
    {id: 9, name: 'Germany', stillACountry: true},
    {id: 10, name: 'Prussia', stillACountry: false},
  ];

  getCountries(): Observable<Country[]>
  {
    return of(this.countries); 
  }

  constructor() { }
}
