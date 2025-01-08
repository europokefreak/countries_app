import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  { path: '', component: CountriesListComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: '**', component: CountriesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
