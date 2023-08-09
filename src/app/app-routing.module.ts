import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { tasksResolver } from './resolvers/tasks.resolver';

const routes: Routes = [
  {
    title: 'All tasks',
    path: '',
    component: TasksListComponent,
    resolve: {
      tasks: tasksResolver
    }
  },
  {
    title: 'Pending tasks',
    path: 'pending',
    component: TasksListComponent,
    resolve: {
      tasks: tasksResolver
    }
  },
  {
    title: 'Completed tasks',
    path: 'completed',
    component: TasksListComponent,
    resolve: {
      tasks: tasksResolver
    }
  },
  {
    title: 'Deleted tasks',
    path: 'deleted',
    component: TasksListComponent,
    resolve: {
      tasks: tasksResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
