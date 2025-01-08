import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent implements OnInit {
  country: Country;
  panelOpenState = signal(false);

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.country = { id: '', name: '', region: '', flag: '', capital: '' };
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Nombre: ' + id);

    if (id) {
      this.countriesService.getCountryByName(id).subscribe((country) => {
        if (!country) {
          this.router.navigateByUrl('/');
        }

        this.country = country;
        console.log('Pais: ' + this.country.capital);
      });
    }
  }
}
