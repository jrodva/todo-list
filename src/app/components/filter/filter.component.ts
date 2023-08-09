import { Component, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() name: string;
  @Input() path: string;

  constructor(private tasksService: TasksService, private router: Router) { }

  async filterTasksByStatus() {
    await this.router.navigate([this.path]);
    this.tasksService.updateTasksWithDataFromApi();
  }
}
