import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { FiltersListComponent } from '../filters-list/filters-list.component';
import { FilterComponent } from '../filter/filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from '@jest/globals';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, FiltersListComponent, FilterComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
