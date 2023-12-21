import { Component, OnInit } from '@angular/core';
import { SingleLeave } from 'src/app/models/single-leave';
import { SingleLeaveStatus } from 'src/app/models/single-leave-status';
import { SingleLeaveService } from 'src/app/services/single-leave.service';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'pm-submitted-leave',
  templateUrl: './submitted-leave.component.html',
  styleUrl: './submitted-leave.component.css'
})
export class SubmittedLeaveComponent implements OnInit {
  constructor(private singleLeaveService: SingleLeaveService, private workerService: WorkerService) { }

  singleLeaves: SingleLeave[];
  status = SingleLeaveStatus;

  ngOnInit(): void {
    this.singleLeaveService.getSingleLeaves(this.workerService.workerId).subscribe(r => this.singleLeaves = r);
  }
}
