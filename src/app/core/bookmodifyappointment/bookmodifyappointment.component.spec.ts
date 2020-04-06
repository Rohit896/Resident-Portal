import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmodifyappointmentComponent } from './bookmodifyappointment.component';

describe('BookmodifyappointmentComponent', () => {
  let component: BookmodifyappointmentComponent;
  let fixture: ComponentFixture<BookmodifyappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmodifyappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmodifyappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
