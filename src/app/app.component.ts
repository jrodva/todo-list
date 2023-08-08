import { Component, OnInit} from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe((tasks) => {
      console.log('Tareasss ', tasks);
    })
  }
}
