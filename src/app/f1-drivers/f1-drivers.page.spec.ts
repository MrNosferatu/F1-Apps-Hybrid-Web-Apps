import { ComponentFixture, TestBed } from '@angular/core/testing';
import { F1DriversPage } from './f1-drivers.page';

describe('F1DriversPage', () => {
  let component: F1DriversPage;
  let fixture: ComponentFixture<F1DriversPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(F1DriversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
