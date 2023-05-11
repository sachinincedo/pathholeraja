import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPotholeComponent } from './report-pothole.component';

describe('ReportPotholeComponent', () => {
  let component: ReportPotholeComponent;
  let fixture: ComponentFixture<ReportPotholeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPotholeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPotholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
