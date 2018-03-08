import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathConditionsComponent } from './path-conditions.component';

describe('PathConditionsComponent', () => {
  let component: PathConditionsComponent;
  let fixture: ComponentFixture<PathConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
