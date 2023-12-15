import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestRoutingModule } from './leave-request/leave-request-routing-module';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LeaveRequestRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
