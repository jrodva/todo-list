import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task'
import { TasksService } from '../../services/tasks.service';
import { Status } from '../../enums/status';
import { Location } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  isLoading = true;
  isError = false;
  tasks: Task[] = [];
  @ViewChild('taskName', {static: true}) taskNameElement: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService, private location: Location, taskNameElement: ElementRef) {
    this.taskNameElement = taskNameElement;
  }

  ngOnInit() {
    this.tasksService.tasks$.pipe(take(2)).subscribe(tasks => {
      const path = this.location.path().substring(1);

      this.tasks = path ? tasks.filter(task => task.status === path) : tasks;
      this.isLoading = false;
    },
    () => {
      this.isError = true;
      this.isLoading = false;
    });
  }

  addNewTask() {
    const task: Task = { id: '', name: this.taskNameElement.nativeElement.value, status: Status.Pending };

    this.tasksService.addNewTask(task);
  }
}
