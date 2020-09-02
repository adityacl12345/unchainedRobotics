import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxcomponentComponent } from './boxcomponent.component';

describe('BoxcomponentComponent', () => {
  let component: BoxcomponentComponent;
  let fixture: ComponentFixture<BoxcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
