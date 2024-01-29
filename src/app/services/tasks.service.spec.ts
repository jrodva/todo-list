import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { TasksApiService } from './tasks-api.service';
import { of } from 'rxjs';
import { Status } from '../enums/status';
import { expect } from '@jest/globals';

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksApiServiceMock: jest.Mocked<TasksApiService>;

  beforeEach(() => {
    tasksApiServiceMock = {
      getTasks: jest.fn(),
      addNewTask: jest.fn(),
      updateTaskStatus: jest.fn(),
      updateTaskName: jest.fn(),
    } as unknown as jest.Mocked<TasksApiService>;

    TestBed.configureTestingModule({
      providers: [
        TasksService,
        { provide: TasksApiService, useValue: tasksApiServiceMock },
      ],
    });

    tasksService = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(tasksService).toBeTruthy();
  });

  it('should add a new task', () => {
    const newTask = { id: '100', name: 'New Task', status: Status.Pending };

    tasksApiServiceMock.addNewTask.mockReturnValueOnce(of(newTask));

    tasksApiServiceMock.addNewTask(newTask);

    expect(tasksApiServiceMock.addNewTask).toHaveBeenCalledWith({ ...newTask, id: '100' });
    expect(tasksApiServiceMock.addNewTask).toHaveBeenCalledTimes(1);
  });

  it('should update task status', () => {
    const existingTask = { id: '100', name: 'Task 100', status: Status.Pending };
    const updatedStatus = Status.Completed;

    tasksApiServiceMock.updateTaskStatus.mockReturnValueOnce(of({ ...existingTask, status: updatedStatus }));

    tasksService.updateTaskStatus(existingTask, updatedStatus);

    expect(tasksApiServiceMock.updateTaskStatus).toHaveBeenCalledWith(existingTask, updatedStatus);
    expect(tasksApiServiceMock.updateTaskStatus).toHaveBeenCalledTimes(1);
  });

  it('should update task name', () => {
    const existingTask = { id: '100', name: 'Task 100', status: Status.Pending };
    const updatedName = 'Updated Task 100';

    tasksApiServiceMock.updateTaskName.mockReturnValueOnce(of({ ...existingTask, name: updatedName }));

    tasksService.updateTaskName(existingTask, updatedName);

    expect(tasksApiServiceMock.updateTaskName).toHaveBeenCalledWith(existingTask, updatedName);
    expect(tasksApiServiceMock.updateTaskName).toHaveBeenCalledTimes(1);
  });

  it('should update tasks with data from API', () => {
    const mockTasks = [
      { id: '100', name: 'Task 100', status: Status.Pending },
      { id: '200', name: 'Task 200', status: Status.Completed },
    ];

    tasksApiServiceMock.getTasks.mockReturnValueOnce(of(mockTasks));

    tasksService.updateTasksWithDataFromApi();

    expect(tasksApiServiceMock.getTasks).toHaveBeenCalledTimes(1);
    expect(tasksService.getTasks()).toEqual(mockTasks);
  });
});

