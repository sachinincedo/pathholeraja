import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPotholeComponent } from './status-pothole.component';

describe('StatusPotholeComponent', () => {
  let component: StatusPotholeComponent;
  let fixture: ComponentFixture<StatusPotholeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPotholeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPotholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
