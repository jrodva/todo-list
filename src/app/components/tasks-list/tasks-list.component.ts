import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task'
import { TasksService } from '../../services/tasks.service';
import { Status } from '../../enums/status';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, OnDestroy {
  isLoading = true;
  isError = false;
  tasks: Task[] = [];
  tasksSubscription: Subscription;
  @ViewChild('taskName', {static: true}) taskNameElement: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService, private location: Location, taskNameElement: ElementRef) {
    this.taskNameElement = taskNameElement;
  }

  ngOnInit() {
    this.tasksSubscription = this.tasksService.tasks$.subscribe(
      {
        next: (tasks) => {
          const path = this.location.path().substring(1);

          this.tasks = path ? tasks.filter(task => task.status === path) : tasks;
          this.isLoading = false;
        },
        error: () => {
          this.isError = true;
          this.isLoading = false;
        }
      }
    );
  }

  addNewTask() {
    const task: Task = { id: '', name: this.taskNameElement.nativeElement.value, status: Status.Pending };

    this.tasksService.addNewTask(task);
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }
}
