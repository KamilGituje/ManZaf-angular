import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Leave } from 'src/app/models/leave';
import { SingleLeave } from 'src/app/models/single-leave';
import { LeaveService } from 'src/app/services/leave.service';
import { WorkerService } from 'src/app/services/worker.service';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { SingleLeaveService } from 'src/app/services/single-leave.service';
import { SingleLeaveForCreation } from 'src/app/models/single-leave-for-creation';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface DialogData {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'pm-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class AvailableLeaveComponent implements OnInit {
  constructor(private workerService: WorkerService, private leaveService: LeaveService, private singleLeaveService: SingleLeaveService, private dialog: MatDialog, private datePipe: DatePipe, private snackBar: MatSnackBar) { }

  leaves: Leave[];
  singleLeave = new SingleLeaveForCreation();
  singleLeaveResponse: SingleLeave;
  selectedLeave: Leave;

  ngOnInit(): void {
    this.getAvailableLeaves();
  }
  getAvailableLeaves() {
    this.leaveService.getAvailableLeaves(this.workerService.workerId).subscribe(r => this.leaves = r);
  }
  openDialog(leave: Leave): void {
    this.selectedLeave = leave;
    this.singleLeave.leaveTypeId = leave.leaveType.leaveTypeId;
    const dialogRef = this.dialog.open(DatepickerComponent, { data: { startDate: this.singleLeave.startDate, endDate: this.singleLeave.endDate } });
    dialogRef.afterClosed().subscribe(result => {
      this.singleLeave.startDate = this.datePipe.transform(result.startDate, "YYYY-MM-dd"), this.singleLeave.endDate = this.datePipe.transform(result.endDate, "YYYY-MM-dd");
      if (this.singleLeave.endDate === null) {
        this.singleLeave.endDate = this.singleLeave.startDate;
      }
    });
  }
  onConfirm(singleLeave: SingleLeaveForCreation): void {
    this.singleLeaveService.addSingleLeave(singleLeave, this.workerService.workerId).subscribe({
      next: r => {
        this.singleLeaveResponse = r;
        this.openSnackBar("Leave succesfully requested", true);
        this.getAvailableLeaves();
      },
      error: () => this.openSnackBar("Leave request failed", false)
    });

  }
  openSnackBar(message: string, success: boolean) {
    if (success)
      this.snackBar.open(message, "Close", { duration: 3000, panelClass: "snackbar-success", verticalPosition: "top" })
    else
      this.snackBar.open(message, "Close", { duration: 3000, panelClass: "snackbar-fail", verticalPosition: "top" })
  }
}