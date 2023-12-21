import { Component, OnInit } from '@angular/core';
import { SingleLeave } from 'src/app/models/single-leave';
import { SingleLeaveService } from 'src/app/services/single-leave.service';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'pm-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrl: './manage-requests.component.css'
})
export class ManageRequestsComponent implements OnInit {
constructor(private singleLeaveService: SingleLeaveService, private workerService: WorkerService){}

singleLeaves: SingleLeave[];

ngOnInit(): void {
  this.singleLeaveService.getSingleLeavesByManagerId(this.workerService.workerId, true).subscribe(r => this.singleLeaves = r);
}
}
