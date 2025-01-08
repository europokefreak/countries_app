import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css',
})
export class CountriesListComponent implements OnInit {
  countries: Country[] = [];
  viewMode: string = 'list';
  loading: boolean = true;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        this.loading = false;
      },
      error: (error) => {
        console.log('Error al cargar paises: ', error);
        this.loading = false;
      },
    });
  }

  setView(mode: string): void {
    this.viewMode = mode;
  }
}
