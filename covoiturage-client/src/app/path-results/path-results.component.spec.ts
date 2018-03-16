import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathResultsComponent } from './path-results.component';

describe('PathResultsComponent', () => {
  let component: PathResultsComponent;
  let fixture: ComponentFixture<PathResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
