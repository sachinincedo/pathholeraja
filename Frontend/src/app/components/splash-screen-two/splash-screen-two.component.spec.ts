import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenTwoComponent } from './splash-screen-two.component';

describe('SplashScreenTwoComponent', () => {
  let component: SplashScreenTwoComponent;
  let fixture: ComponentFixture<SplashScreenTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashScreenTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
