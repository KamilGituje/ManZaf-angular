import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'pm-available-leaves',
  templateUrl: './available-leave.component.html',
  styleUrls: ['./available-leave.component.css']
})
export class AvailableLeaveComponent implements OnInit {

  constructor(private workerService: WorkerService, private leaveService: LeaveService) { }

  leaves: Leave[];
  selectedLeave: Leave = null;

  ngOnInit(): void {
    this.leaveService.GetAvailableLeavesForWorker(this.workerService.workerId).subscribe({next: leaves => this.leaves = leaves});
  }
  onClick(leave: Leave): void{
    this.selectedLeave = leave;
  }

}
