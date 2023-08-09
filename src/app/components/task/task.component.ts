import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() name: string = '';
  @Input() status: string = '';

  isEditionModeActive: boolean = false;

  showEditionMode() {
    this.isEditionModeActive = true;
  }

  hideEditionMode() {
    this.isEditionModeActive = false;
  }
}
