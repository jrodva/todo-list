import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task'
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';
import { Status } from '../../enums/status';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  tasks$: Observable<Task[]>;
  @ViewChild('taskName', {static: true}) taskNameElement: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService, taskNameElement: ElementRef) {
    this.taskNameElement = taskNameElement;
    this.tasks$ = this.tasksService.tasks$;
  }

  addNewTask() {
    const task: Task = { id: '', name: this.taskNameElement.nativeElement.value, status: Status.Pending };

    this.tasksService.addNewTask(task);
  }
}
