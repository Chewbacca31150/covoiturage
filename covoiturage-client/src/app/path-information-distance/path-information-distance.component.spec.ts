import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathInformationDistanceComponent } from './path-information-distance.component';

describe('PathInformationDistanceComponent', () => {
  let component: PathInformationDistanceComponent;
  let fixture: ComponentFixture<PathInformationDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathInformationDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathInformationDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
