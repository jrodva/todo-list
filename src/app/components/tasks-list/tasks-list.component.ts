import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task'
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  tasks$: Observable<Task[]>;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService) {
    this.tasks$ = this.tasksService.tasks$;
  }
}
