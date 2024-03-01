import { Component, OnInit } from '@angular/core';
import { SingleLeave } from 'src/app/models/single-leave';
import { SingleLeaveStatus } from 'src/app/models/single-leave-status';
import { SingleLeaveService } from 'src/app/services/single-leave.service';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'pm-requests-after-manage',
  templateUrl: './requests-after-manage.component.html',
  styleUrl: './requests-after-manage.component.css'
})
export class RequestsAfterManageComponent implements OnInit {
  constructor(private singleLeaveService: SingleLeaveService, private workerService: WorkerService) { }

  singleLeaves: SingleLeave[];
  status = SingleLeaveStatus;

  ngOnInit(): void {
    this.singleLeaveService.getSingleLeavesByManagerId(this.workerService.workerId, false).subscribe(r => this.singleLeaves = r);
  }
}
