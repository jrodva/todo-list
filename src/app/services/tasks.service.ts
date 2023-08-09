import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../interfaces/task';
import { Status } from '../enums/status';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(type: string): Observable<Task[]> {
    return this.http
      .get<Task[]>(environment.API_URL)
      .pipe(
        map(tasks => {
          const filteredTasks = tasks.filter(task => task.status === type);
          const orderByStatus = [Status.Pending, Status.Deleted, Status.Completed];
          const sortedTaskByStatus = tasks.sort(
            (a, b) => orderByStatus.indexOf(a.status) - orderByStatus.indexOf(b.status)
          );

          return filteredTasks.length ? filteredTasks : sortedTaskByStatus;
        })
      );
  }
}
