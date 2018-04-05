import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrajetsComponent } from './my-trajets.component';

describe('MyTrajetsComponent', () => {
  let component: MyTrajetsComponent;
  let fixture: ComponentFixture<MyTrajetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTrajetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrajetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
