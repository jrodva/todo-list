import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../interfaces/task';
import { Status } from '../enums/status';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.API_URL)
      .pipe(
        map((tasks) => {
          const orderByStatus = [Status.Pending, Status.Deleted, Status.Completed];
          return tasks.sort(
            (a, b) => orderByStatus.indexOf(a.status) - orderByStatus.indexOf(b.status)
          );
        })
      );
  }

  addNewTask(task: Task) {
    return this.http.post<Task>(`${environment.API_URL}`, task);
  }

  updateTaskStatus(task: Task, status: Status): Observable<Task> {
    return this.http.put<Task>(`${environment.API_URL}/${task.id}`, {...task, status});
  }

  updateTaskName(task: Task, name: string): Observable<Task> {
    return this.http.put<Task>(`${environment.API_URL}/${task.id}`, {...task, name});
  }
}
