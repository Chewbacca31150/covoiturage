import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPathSnackComponent } from './add-path-snack.component';

describe('AddPathSnackComponent', () => {
  let component: AddPathSnackComponent;
  let fixture: ComponentFixture<AddPathSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPathSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPathSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
