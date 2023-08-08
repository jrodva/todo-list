import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task> {
    return this.http.get<Task>(environment.API_URL);
  }
}
