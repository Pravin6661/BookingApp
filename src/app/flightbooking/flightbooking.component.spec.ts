import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookingComponent } from './flightbooking.component';

describe('FlightbookingComponent', () => {
  let component: FlightbookingComponent;
  let fixture: ComponentFixture<FlightbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightbookingComponent]
    });
    fixture = TestBed.createComponent(FlightbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
