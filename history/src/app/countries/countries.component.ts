import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country: Country;
  countries: Country[]; 

  setCountry(c: Country){
    this.country = c;
  }

  constructor( private countryService: CountryService ) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe( // subscribing to the service
      cs => this.countries = cs
    );
  }

}
