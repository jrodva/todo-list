import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TasksApiService } from './tasks-api.service';
import { environment } from '../../environments/environment';
import { Status } from '../enums/status';
import { Task } from '../interfaces/task';
import { expect } from '@jest/globals';

describe('TasksApiService', () => {
  let tasksApiService: TasksApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksApiService],
    });

    tasksApiService = TestBed.inject(TasksApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(tasksApiService).toBeTruthy();
  });

  it('should retrieve tasks from the API', () => {
    const mockTasks: Task[] = [
      { id: '100', name: 'Task 100', status: Status.Pending },
      { id: '200', name: 'Task 200', status: Status.Completed },
      { id: '300', name: 'Task 300', status: Status.Deleted }
    ];

    tasksApiService.getTasks().subscribe((tasks) => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpTestingController.expectOne(environment.API_URL);

    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  it('should add a new task via POST request', () => {
    const newTask: Task = { id: '300', name: 'New Task', status: Status.Pending };

    tasksApiService.addNewTask(newTask).subscribe((task) => {
      expect(task).toEqual(newTask);
    });

    const req = httpTestingController.expectOne(environment.API_URL);

    expect(req.request.method).toBe('POST');
    req.flush(newTask);
  });

  it('should update task status via PUT request', () => {
    const existingTask: Task = { id: '100', name: 'Task 100', status: Status.Pending };
    const updatedStatus: Status = Status.Completed;

    tasksApiService.updateTaskStatus(existingTask, updatedStatus).subscribe((task) => {
      expect(task).toEqual({ ...existingTask, status: updatedStatus });
    });

    const req = httpTestingController.expectOne(`${environment.API_URL}/${existingTask.id}`);

    expect(req.request.method).toBe('PUT');
    req.flush({ ...existingTask, status: updatedStatus });
  });

  it('should update task name via PUT request', () => {
    const existingTask: Task = { id: '100', name: 'Task 100', status: Status.Pending };
    const updatedName: string = 'Updated Task 100';

    tasksApiService.updateTaskName(existingTask, updatedName).subscribe((task) => {
      expect(task).toEqual({ ...existingTask, name: updatedName });
    });

    const req = httpTestingController.expectOne(`${environment.API_URL}/${existingTask.id}`);

    expect(req.request.method).toBe('PUT');
    req.flush({ ...existingTask, name: updatedName });
  });
});
