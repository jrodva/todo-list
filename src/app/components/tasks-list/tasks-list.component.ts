import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tasks = this.activatedRoute.snapshot.data['tasks'];
  }
}
