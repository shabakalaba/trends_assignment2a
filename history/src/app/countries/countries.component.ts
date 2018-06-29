import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country: Country;
  countries: Country[]; 
  single: Country;

  setCountry(c: Country){
    this.country = c;
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe( // subscribing to the service
      cs => this.countries = cs
    );
    this.countryService.getCountry(3).subscribe(data => this.single = data);
  }

}
