import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() name: string;
  @Input() path: string;

  counter: number;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.tasksService.tasks$.subscribe((tasks) => {
      const filteredCounter = tasks.filter(task => task.status === this.path.substring(1)).length;

      this.counter = filteredCounter || tasks.length;
    });
  }

  async filterTasksByStatus() {
    await this.router.navigate([this.path]);
    this.tasksService.updateTasksWithDataFromApi();
  }
}
