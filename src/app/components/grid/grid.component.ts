import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input() countries: Country[] = [];
}
