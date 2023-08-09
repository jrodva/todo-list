import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task'
import { TasksService } from '../../services/tasks.service';
import { Status } from '../../enums/status';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;

  isEditionModeActive: boolean = false;

  constructor(private tasksService: TasksService) { }

  showEditionMode() {
    this.isEditionModeActive = true;
  }

  hideEditionMode() {
    this.isEditionModeActive = false;
  }

  deleteTask() {
    this.tasksService.updateTaskStatus(this.task, Status.Deleted);
  }

  completeTask() {
    this.tasksService.updateTaskStatus(this.task, Status.Completed);
  }
}
