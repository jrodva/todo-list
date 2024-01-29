import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksListComponent } from './tasks-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from '@jest/globals';

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
