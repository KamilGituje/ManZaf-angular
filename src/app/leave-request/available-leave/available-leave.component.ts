import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'pm-available-leaves',
  templateUrl: './available-leave.component.html',
  styleUrls: ['./available-leave.component.css']
})
export class AvailableLeaveComponent implements OnInit {

  constructor(private leaveService: LeaveService) { }

  leaves: Leave[];

  ngOnInit(): void {
    this.leaveService.GetAvailableLeavesForWorker(17).subscribe({next: leaves => this.leaves = leaves});
  }

}
