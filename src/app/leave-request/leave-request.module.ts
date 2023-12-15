import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave/leave.component';
import { AvailableLeaveComponent } from './available-leave/available-leave.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';




@NgModule({
  declarations: [
    LeaveComponent,
    AvailableLeaveComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class LeaveRequestModule { }
