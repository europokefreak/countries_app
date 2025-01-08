import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get<any[]>(
        'https://restcountries.com/v3.1/all?fields=ccn3,name,flags,region,capital'
      )
      .pipe(
        map((countries) => {
          return countries.map((country) => ({
            id: country.ccn3,
            name: country.name.common,
            region: country.region,
            capital: country.capital ? country.capital[0] : 'No capital',
            flag: country.flags.svg,
          }));
        })
      );
  }

  getCountryByName(id: String): Observable<Country> {
    return this.http
      .get<any>(
        'https://restcountries.com/v3.1/alpha/' +
          id +
          '?fields=ccn3,name,flags,region,capital'
      )
      .pipe(
        map((country) => ({
          id: country.ccn3,
          name: country.name.common,
          region: country.region,
          capital: country.capital ? country.capital[0] : 'No capital',
          flag: country.flags.svg,
        }))
      );
  }
}
