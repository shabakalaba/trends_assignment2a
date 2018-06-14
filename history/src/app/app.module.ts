import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CountriesComponent } from './countries/countries.component';
import { WarlistComponent } from './warlist/warlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    WarlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
