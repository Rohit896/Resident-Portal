import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentservicesComponent } from './residentservices.component';

describe('ResidentservicesComponent', () => {
  let component: ResidentservicesComponent;
  let fixture: ComponentFixture<ResidentservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
