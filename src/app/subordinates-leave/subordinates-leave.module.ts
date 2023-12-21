import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ManagerLeaveComponent } from './manager-leave/manager-leave.component';
import { SubordinatesLeaveRoutingModule } from './subordinates-leave-routing-module';
import { ManageRequestsComponent } from './manage-requests/manage-requests.component';



@NgModule({
  declarations: [
    ManagerLeaveComponent,
    ManageRequestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubordinatesLeaveRoutingModule
  ]
})
export class SubordinatesLeaveModule { }
