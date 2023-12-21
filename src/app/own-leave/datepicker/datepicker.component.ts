import { Component, Inject } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../request-leave/request-leave.component';

@Component({
  selector: 'pm-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent {
  constructor(private adapter: DateAdapter<Date>, public dialogRef: MatDialogRef<DatepickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    this.minDate.setDate(currentDay + 1)
    this.maxDate = new Date(currentYear + 2, 0, 0)
    this.adapter.getFirstDayOfWeek = () => {return 1};
  }

  minDate = new Date();
  maxDate: Date;
  startDate: Date;
  endDate: Date;

  weekendDaysFilter(day: Date): boolean{
    if(day.getDay() === 0 || day.getDay() === 6)
    {
      return false;
    }
    return true;
  }
}