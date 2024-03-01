import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsAfterManageComponent } from './requests-after-manage.component';

describe('RequestsAfterManageComponent', () => {
  let component: RequestsAfterManageComponent;
  let fixture: ComponentFixture<RequestsAfterManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsAfterManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestsAfterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
