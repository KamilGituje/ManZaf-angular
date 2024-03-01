import { Component, OnInit } from '@angular/core';
import { SingleLeave } from 'src/app/models/single-leave';
import { SingleLeaveForStatusUpdate } from 'src/app/models/single-leave-for-status-update';
import { SingleLeaveService } from 'src/app/services/single-leave.service';
import { WorkerService } from 'src/app/services/worker.service';



@Component({
  selector: 'pm-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrl: './manage-requests.component.css'
})
export class ManageRequestsComponent implements OnInit {
  constructor(private singleLeaveService: SingleLeaveService, private workerService: WorkerService) { }

  singleLeaves: SingleLeave[];
  updatedSingleLeave: SingleLeave;

  ngOnInit(): void {
    this.getSingleLeavesByManagerId();
  }
  onAccept(singleLeaveId: number): void {
    const singleLeaveToUpdate: SingleLeaveForStatusUpdate = { singleLeaveId: singleLeaveId, status: 1 };
    this.singleLeaveService.updateSingleLeaveStatus(singleLeaveToUpdate).subscribe(r => {
      this.updatedSingleLeave = r;
      this.getSingleLeavesByManagerId()
    })
  }
  onReject(singleLeaveId: number) {
    const singleLeaveToUpdate: SingleLeaveForStatusUpdate = { singleLeaveId: singleLeaveId, status: 2 };
    this.singleLeaveService.updateSingleLeaveStatus(singleLeaveToUpdate).subscribe(r => {
      this.updatedSingleLeave = r;
      this.getSingleLeavesByManagerId()
    })
  }
  getSingleLeavesByManagerId() {
    this.singleLeaveService.getSingleLeavesByManagerId(this.workerService.workerId, true).subscribe(r => this.singleLeaves = r);
  }
}
