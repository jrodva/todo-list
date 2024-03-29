import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks/tasks.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() path: string;

  counter: number;
  counterSubscription: Subscription;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.counterSubscription = this.tasksService
      .tasks$
      .subscribe((tasks) => {
        if (this.path.substring(1)) {
          this.counter = tasks.filter(task => task.status === this.path.substring(1)).length;
        } else {
          this.counter = tasks.length;
        }
    });
  }

  async filterTasksByStatus() {
    await this.router.navigate([this.path]);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
