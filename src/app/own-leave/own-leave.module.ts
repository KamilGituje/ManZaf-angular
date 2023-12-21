import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave/leave.component';
import { AvailableLeaveComponent } from './request-leave/request-leave.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { OwnLeaveRoutingModule } from './own-leave-routing-module';
import { SharedModule } from '../shared/shared.module';
import { SubmittedLeaveComponent } from './submitted-leave/submitted-leave.component';




@NgModule({
  declarations: [
    LeaveComponent,
    AvailableLeaveComponent,
    DatepickerComponent,
    SubmittedLeaveComponent
  ],
  imports: [
    CommonModule,
    OwnLeaveRoutingModule,
    SharedModule
  ]
})
export class OwnLeaveModule { }
