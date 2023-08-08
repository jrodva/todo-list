import { Component, Input } from '@angular/core';
import { FILTERS } from "../../constants/filters.constants";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() name: string = '';
  protected readonly FILTERS = FILTERS;
}
