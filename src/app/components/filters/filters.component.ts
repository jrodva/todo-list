import { Component } from '@angular/core';
import { FILTERS } from '../../constants/filters.constants';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  filters: Filter[] = FILTERS;
}
