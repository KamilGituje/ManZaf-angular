import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerLeaveComponent } from './manager-leave/manager-leave.component';

const routes: Routes = [
  { path: "", component: ManagerLeaveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SubordinatesLeaveRoutingModule { }
