import { ResolveFn } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task'

export const tasksResolver: ResolveFn<Observable<Task[]>> = (route, state) => {
  return inject(TasksService).getTasks(route.url.toString());
};
