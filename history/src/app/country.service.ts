import { Injectable } from '@angular/core';
import { Country } from './country';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  countries : Country[] = [
    {id: 1, name: 'Soviet Union', stillACountry : false, image : 'https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/u/s/ussr-flag.png', established: new Date('12/28/1922') },
    {id: 2, name: 'United Kingdom', stillACountry: true, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_the_United_Kingdom_Square.svg/2000px-Flag_of_the_United_Kingdom_Square.svg.png', established: new Date('04/01/1922')},
    {id: 3, name: 'United States of America', stillACountry: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png', established: new Date('07/04/1776')},
    {id: 4, name: 'China', stillACountry: true, image: 'https://cdn.britannica.com/90/7490-004-415899A0.jpg', established: new Date('10/01/1949')},
    {id: 5, name: 'Japan', stillACountry: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png', established: new Date('02/11/660')},
    {id: 6, name: 'Canada', stillACountry: true, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png', established: new Date('07/01/1867')},
    {id: 7, name: 'Italy', stillACountry: true, image: 'https://i.ytimg.com/vi/e9-oolRoz8k/maxresdefault.jpg', established: new Date('03/17/1861')},
    {id: 8, name: 'Russia', stillACountry: true, image: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/rs-lgflag.gif', established: new Date('12/25/1991')},
    {id: 9, name: 'Germany', stillACountry: true, image: 'https://cdn.britannica.com/97/897-004-6990FA31.jpg', established: new Date('02/02/962')},
    {id: 10, name: 'Prussia', stillACountry: false, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Prussia_%281892-1918%29.svg/300px-Flag_of_Prussia_%281892-1918%29.svg.png', established: new Date('04/10/1525')},
  ];

  getCountries(): Observable<Country[]>
  {
    return of(this.countries); 
  }

  constructor() { }
}
