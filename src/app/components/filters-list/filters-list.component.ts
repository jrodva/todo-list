import { Component } from '@angular/core';
import { FILTERS } from '../../constants/filters.constants';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent {
  filters: Filter[] = FILTERS;
}
