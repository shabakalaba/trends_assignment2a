import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WarlistComponent } from './warlist/warlist.component';
import { CountriesComponent } from './countries/countries.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes=[
  {path: 'countries', component: CountriesComponent},
  {path: 'details', component: DetailsComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
