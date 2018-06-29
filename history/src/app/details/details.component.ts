import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { War } from '../details';
import { DetailsService } from '../details.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  countries: War[];
  // num : number;
  single: War;
  
  // getNum(){
  //   this.num = +this.route.snapshot.paramMap.get('id');
  //   console.log(this.num);
  //   return this.num;
  // };
  
  constructor(
    private route : ActivatedRoute,
    private location: Location,
    private detailsService: DetailsService
  ) {}

  ngOnInit() {
    this.detailsService.getAll().subscribe(data => this.countries = data);
    this.detailsService.getSingle().subscribe(data => this.single = data);
  }
}
