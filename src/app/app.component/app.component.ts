import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { Worker } from '../models/worker';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private workerService: WorkerService) { }

 worker: Worker;

  ngOnInit(): void {
   this.workerService.getWorkerWithSubordinates(this.workerService.workerId).subscribe(r => this.worker = r);
  }
}
