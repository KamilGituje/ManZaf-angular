import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Leave } from 'src/app/models/leave';
import { SingleLeave } from 'src/app/models/single-leave';
import { LeaveService } from 'src/app/services/leave.service';
import { WorkerService } from 'src/app/services/worker.service';
import { DatepickerComponent } from '../datepicker/datepicker.component';


export interface DialogData {
  startDate: Date;
  endDate:Date;
}

@Component({
  selector: 'pm-available-leaves',
  templateUrl: './available-leave.component.html',
  styleUrls: ['./available-leave.component.css']
})
export class AvailableLeaveComponent implements OnInit {

  constructor(private workerService: WorkerService, private leaveService: LeaveService, private dialog: MatDialog) { }

  leaves: Leave[];
  selectedLeave: Leave = null;
  singleLeave: SingleLeave = null;
  startDate: Date;
  endDate: Date;

  ngOnInit(): void {
    this.leaveService.GetAvailableLeavesForWorker(this.workerService.workerId).subscribe({ next: leaves => this.leaves = leaves });
  }
  onClick(leave: Leave): void {
    this.selectedLeave = leave;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DatepickerComponent,{data: {startDate: this.startDate, endDate: this.endDate }});
    dialogRef.afterClosed().subscribe(result => {this.startDate = result.startDate, this.endDate = result.endDate})
  }
}