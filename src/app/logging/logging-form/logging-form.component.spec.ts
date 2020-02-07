import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingFormComponent } from './logging-form.component';

describe('LogginFormComponent', () => {
  let component: LoggingFormComponent;
  let fixture: ComponentFixture<LoggingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
