import { Injectable } from '@angular/core';
import { War } from './war';
import { timingSafeEqual } from 'crypto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarsService {

  wars : War[] = [
    {id: 1, name: 'Mexican Revolution', startDate: new Date('01/01/1910'), endDate: new Date('01/01/1921'), stillGoing: false, imagePath: 'http://www.latinamericanstudies.org/mexican-revolution/villa3.gif'},
    {id: 2, name: 'World War I', startDate: new Date('01/01/1914'), endDate: new Date('01/01/1918'), stillGoing: false, imagePath: 'https://www.historyonthenet.com/wp-content/uploads/2016/12/135151-004-0D4D550E.jpg'},
    {id: 3, name: 'Russian Civil War', startDate: new Date('01/01/1917'), endDate: new Date('01/01/1923'), stillGoing: false, imagePath: 'http://www.emersonkent.com/images/bolsheviks_moscow.jpg'},
    {id: 5, name: 'World War II', startDate: new Date('01/01/1939'), endDate: new Date('01/01/1945'), stillGoing: false, imagePath: 'https://i.ebayimg.com/thumbs/images/g/QzsAAOSwQJ5UUIvC/s-l1200.jpg'},
    {id: 6, name: 'Korean War', startDate: new Date('01/01/1950'), endDate: new Date('01/01/1953'), stillGoing: false, imagePath: 'https://3.bp.blogspot.com/-6woK4lkrvy8/WlhHVK1fGDI/AAAAAAAAPBw/aVnIzCf0XSA8WD12nrSGt44_F9_ctP0dQCLcBGAs/s1600/Korean_War_in_pictures%2B%25289%2529.jpg'},
    {id: 7, name: 'Vietnam War', startDate: new Date('01/01/1955'), endDate: new Date('01/01/1975'), stillGoing: false, imagePath: 'http://upload.wikimedia.org/wikipedia/commons/a/ac/U.S._Marines_in_Operation_Allen_Brook_%28Vietnam_War%29_001.jpg'},
    {id: 8, name: 'Iraq War', startDate: new Date('01/01/1980'), endDate: new Date('01/01/1988'), stillGoing: false, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Iran-Iraq_war-gallery.png/450px-Iran-Iraq_war-gallery.png'},
    {id: 9, name: 'Gulf War', startDate: new Date('01/01/1990'), endDate: new Date('01/01/1991'), stillGoing: false, imagePath: 'https://fair.org/wp-content/uploads/1991/04/GulfWar.jpg'},
    {id: 10, name: 'War in Afganistan', startDate: new Date('01/01/2001'), endDate: new Date(), stillGoing: true, imagePath: 'https://i.ytimg.com/vi/0a8Zo77_W5c/maxresdefault.jpg'},
    {id: 11, name: 'Iraq War', startDate: new Date('01/01/2003'), endDate: new Date('01/01/2011'), stillGoing: false, imagePath: 'https://cdn.britannica.com/99/98299-004-E4DC6E2D.jpg'}
  ];

  getWars(): Observable<War[]>
  {
    return of(this.wars);
  }

  constructor() { }
}
