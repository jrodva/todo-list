import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks/tasks.service';
import { ElementRef } from '@angular/core';
import { Status } from '../../enums/status';
import { expect } from '@jest/globals';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let tasksServiceMock: jest.Mocked<TasksService>;

  beforeEach(() => {
    tasksServiceMock = {
      updateTaskStatus: jest.fn(),
      updateTaskName: jest.fn(),
    } as unknown as jest.Mocked<TasksService>;

    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: TasksService, useValue: tasksServiceMock }
      ]
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task name and status in the template', () => {
    component.task = { id: '1', name: 'Sample Task', status: Status.Pending };

    fixture.detectChanges();

    const taskNameElement = fixture.nativeElement.querySelector('.task-options span');
    const taskStatusElement = fixture.nativeElement.querySelector('.task-options input');

    expect(taskNameElement.textContent).toContain('Sample Task');
    expect(taskStatusElement.checked).toBeFalsy();
  });

  it('should activate edition mode on mouseenter', () => {
    component.showEditionMode();
    expect(component.isEditionModeActive).toBe(true);
  });

  it('should deactivate edition mode on mouseleave', () => {
    component.isEditionModeActive = true;
    component.hideEditionMode();
    expect(component.isEditionModeActive).toBe(false);
  });

  it('should call updateTaskStatus with Deleted status on deleteTask()', () => {
    component.deleteTask();
    expect(tasksServiceMock.updateTaskStatus).toHaveBeenCalledWith(component.task, Status.Deleted);
  });

  it('should call updateTaskStatus with Completed status on completeTask()', () => {
    component.completeTask();
    expect(tasksServiceMock.updateTaskStatus).toHaveBeenCalledWith(component.task, Status.Completed);
  });

  it('should activate name form on editTaskName()', () => {
    component.editTaskName();
    expect(component.isNameFormActive).toBe(true);
  });

  it('should call updateTaskName and deactivate name form on saveNewTaskName()', () => {
    component.task = { id: '100', name: 'Old Name', status: Status.Pending };
    component.newTaskNameElement = {
      nativeElement: {
        value: 'New Name',
      } as unknown as ElementRef,
    } as ElementRef;

    component.saveNewTaskName();

    expect(tasksServiceMock.updateTaskName).toHaveBeenCalledWith(component.task, 'New Name');
    expect(component.isNameFormActive).toBe(false);
  });

  it('should deactivate name form on cancelTaskNameEdition()', () => {
    component.cancelTaskNameEdition();
    expect(component.isNameFormActive).toBe(false);
  });
});
