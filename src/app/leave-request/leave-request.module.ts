import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave/leave.component';
import { AvailableLeaveComponent } from './available-leave/available-leave.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { LeaveRequestRoutingModule } from './leave-request-routing-module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LeaveComponent,
    AvailableLeaveComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    LeaveRequestRoutingModule,
    SharedModule
  ]
})
export class LeaveRequestModule { }
