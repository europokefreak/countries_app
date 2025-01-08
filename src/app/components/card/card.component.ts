import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() country: Country;

  constructor() {
    this.country = { id: '', name: '', region: '', flag: '', capital: '' };
  }
}
