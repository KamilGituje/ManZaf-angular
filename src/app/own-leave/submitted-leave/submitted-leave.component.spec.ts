import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedLeaveComponent } from './submitted-leave.component';

describe('SubmittedLeaveComponent', () => {
  let component: SubmittedLeaveComponent;
  let fixture: ComponentFixture<SubmittedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmittedLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmittedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
