import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Task } from '../interfaces/task';
import { TasksApiService } from './tasks-api.service';
import { Status } from '../enums/status';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public tasks$: Observable<Task[]> = this.tasks.asObservable();

  constructor(private tasksApiService: TasksApiService) { }

  addNewTask(task: Task) {
    const id = this.tasks
      .value
      .map(task => +task.id)
      .sort((a, b) => a - b)[this.tasks.value.length -1] + 1;

    this.tasksApiService
      .addNewTask({ ...task, id: id.toString() })
      .pipe(take(1))
      .subscribe(() => {
        this.updateTasksWithDataFromApi();
    });
  }

  updateTaskStatus(task: Task, status: Status) {
    this.tasksApiService
      .updateTaskStatus(task, status)
      .pipe(take(1))
      .subscribe(() => {
      this.updateTasksWithDataFromApi();
    });
  }

  updateTaskName(task: Task, name: string) {
    this.tasksApiService
      .updateTaskName(task, name)
      .pipe(take(1))
      .subscribe(() => {
        this.updateTasksWithDataFromApi();
    });
  }

  updateTasksWithDataFromApi() {
    this.tasksApiService
      .getTasks()
      .pipe(take(1))
      .subscribe(tasks => {
        this.tasks.next(tasks);
    });
  }
}
