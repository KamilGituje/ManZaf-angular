import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableLeaveComponent } from './available-leave.component';

describe('AvailableLeaveComponent', () => {
  let component: AvailableLeaveComponent;
  let fixture: ComponentFixture<AvailableLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
