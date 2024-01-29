import { Component } from '@angular/core';
import { TasksService } from './services/tasks/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private tasksService: TasksService) {
    this.tasksService.updateTasksWithDataFromApi();
  }

}
