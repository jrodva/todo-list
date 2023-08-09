import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

const routes: Routes = [
  {
    title: 'All tasks',
    path: '',
    component: TasksListComponent
  },
  {
    title: 'Pending tasks',
    path: 'pending',
    component: TasksListComponent
  },
  {
    title: 'Completed tasks',
    path: 'completed',
    component: TasksListComponent
  },
  {
    title: 'Deleted tasks',
    path: 'deleted',
    component: TasksListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
