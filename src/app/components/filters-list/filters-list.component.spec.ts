import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltersListComponent } from './filters-list.component';
import { FilterComponent } from '../filter/filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FiltersListComponent', () => {
  let component: FiltersListComponent;
  let fixture: ComponentFixture<FiltersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersListComponent, FilterComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(FiltersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
