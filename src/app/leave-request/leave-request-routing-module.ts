import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave/leave.component';
import { AvailableLeaveComponent } from './available-leave/available-leave.component';

const routes: Routes = [
    { path: "leave", component: LeaveComponent },
    { path: "available-leaves", component: AvailableLeaveComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LeaveRequestRoutingModule { }
