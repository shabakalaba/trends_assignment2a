import { Component, OnInit } from '@angular/core';
import { War } from '../war';
import { WarsService } from '../wars.service'

@Component({
  selector: 'app-warlist',
  templateUrl: './warlist.component.html',
  styleUrls: ['./warlist.component.css']
})
export class WarlistComponent implements OnInit {
  title: string = 'Wars';

  war: War;
  wars: War[];

  setWar(w: War)
  {
    this.war = w;
  }

  constructor(private warsService : WarsService) { }

  ngOnInit() {
    this.warsService.getWars().subscribe(ws => this.wars = ws);
  }

}
