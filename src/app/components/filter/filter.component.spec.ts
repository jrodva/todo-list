import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from '@jest/globals';
import { Router } from '@angular/router';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let routerMock: jest.Mocked<Router>;

  beforeEach(() => {
    routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerMock },
      ]
    });

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update counter on task changes', () => {
    component.name = 'Completed';
    component.path = '/completed';
    component.counter = 1;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.textContent).toContain('Completed (1)');
  });

  it('should navigate to the specified path on button click', async () => {
    component.path = '/completed';

    await component.filterTasksByStatus();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/completed']);
  });
});
