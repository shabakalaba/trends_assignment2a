import { Injectable } from '@angular/core';
import { War } from './war';
import { timingSafeEqual } from 'crypto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarsService {

  wars : War[] = [
    {id: 1, name: 'Mexican Revolution', startDate: new Date('01/01/1910'), endDate: new Date('01/01/1921'), stillGoing: false},
    {id: 2, name: 'World War I', startDate: new Date('01/01/1914'), endDate: new Date('01/01/1918'), stillGoing: false},
    {id: 3, name: 'Russian Civil War', startDate: new Date('01/01/1917'), endDate: new Date('01/01/1923'), stillGoing: false},
    {id: 4, name: 'Turkish War of Independence', startDate: new Date('01/01/1919'), endDate: new Date('01/01/1923'), stillGoing: false},
    {id: 5, name: 'Irish War of Independence', startDate: new Date('01/01/1919'), endDate: new Date('01/01/1921'), stillGoing: false},
    {id: 6, name: 'Chinese Civil War', startDate: new Date('01/01/1927'), endDate: new Date('01/01/1949'), stillGoing: false},
    {id: 7, name: 'Spanish Civil War', startDate: new Date('01/01/1936'), endDate: new Date('01/01/1939'), stillGoing: false},
    {id: 8, name: 'World War II', startDate: new Date('01/01/1939'), endDate: new Date('01/01/1945'), stillGoing: false},
    {id: 9, name: 'Greek Civil War', startDate: new Date('01/01/1946'), endDate: new Date('01/01/1949'), stillGoing: false},
    {id: 10, name: '1948 Israeli War', startDate: new Date('01/01/1948'), endDate: new Date('01/01/1949'), stillGoing: false},
    {id: 11, name: 'Korean War', startDate: new Date('01/01/1950'), endDate: new Date('01/01/1953'), stillGoing: false},
    {id: 12, name: 'Mau Mau Uprising', startDate: new Date('01/01/1952'), endDate: new Date('01/01/1960'), stillGoing: false},
    {id: 13, name: 'Cuban Revolution', startDate: new Date('01/01/1953'), endDate: new Date('01/01/1959'), stillGoing: false},
    {id: 14, name: 'Algerian War', startDate: new Date('01/01/1954'), endDate: new Date('01/01/1962'), stillGoing: false},
    {id: 15, name: 'Vietnam War', startDate: new Date('01/01/1955'), endDate: new Date('01/01/1975'), stillGoing: false},
    {id: 16, name: 'Bay of Pigs Invasion', startDate: new Date('01/01/1961'), endDate: new Date('01/01/1961'), stillGoing: false},
    {id: 17, name: 'Soviet War in Afghanistan', startDate: new Date('01/01/1979'), endDate: new Date('01/01/1989'), stillGoing: false},
    {id: 18, name: 'Iraq War', startDate: new Date('01/01/1980'), endDate: new Date('01/01/1988'), stillGoing: false},
    {id: 19, name: 'Falklands War', startDate: new Date('01/01/1982'), endDate: new Date('01/01/1982'), stillGoing: false},
    {id: 20, name: 'Gulf War', startDate: new Date('01/01/1990'), endDate: new Date('01/01/1991'), stillGoing: false},
    {id: 21, name: 'Croatian War of Independence', startDate: new Date('01/01/1991'), endDate: new Date('01/01/1995'), stillGoing: false},
    {id: 22, name: 'Bosnian War', startDate: new Date('01/01/1992'), endDate: new Date('01/01/1995'), stillGoing: false},
    {id: 23, name: 'Kosovo War', startDate: new Date('01/01/1998'), endDate: new Date('01/01/1999'), stillGoing: false},
    {id: 24, name: 'War in Afganistan', startDate: new Date('01/01/2001'), endDate: new Date(), stillGoing: true},
    {id: 25, name: 'Iraq War', startDate: new Date('01/01/2003'), endDate: new Date('01/01/2011'), stillGoing: false},
    {id: 26, name: 'War in Somalia', startDate: new Date('01/01/2006'), endDate: new Date('01/01/2009'), stillGoing: false},
    {id: 27, name: 'Gaza War', startDate: new Date('01/01/2008'), endDate: new Date('01/01/2009'), stillGoing: false}
  ];

  getWars(): Observable<War[]>
  {
    return of(this.wars);
  }

  constructor() { }
}
