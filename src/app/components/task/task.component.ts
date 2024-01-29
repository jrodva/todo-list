import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task'
import { TasksService } from '../../services/tasks/tasks.service';
import { Status } from '../../enums/status';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task = { id: '', name: '', status: Status.Pending };

  isEditionModeActive = false;
  isNameFormActive  = false;

  @ViewChild('newTaskName', {static: true}) newTaskNameElement: ElementRef;

  constructor(private tasksService: TasksService, newTaskNameElement: ElementRef) {
    this.newTaskNameElement = newTaskNameElement;
  }

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

  editTaskName() {
    this.isNameFormActive = true;
  }

  saveNewTaskName() {
    this.tasksService.updateTaskName(this.task, this.newTaskNameElement.nativeElement.value);
    this.isNameFormActive = false;
  }

  cancelTaskNameEdition() {
    this.isNameFormActive = false;
  }
}
