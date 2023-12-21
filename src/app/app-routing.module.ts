import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "own-leave", loadChildren: () => import("./own-leave/own-leave.module").then(m => m.OwnLeaveModule) },
  { path: "subordinates-leave", loadChildren: () => import("./subordinates-leave/subordinates-leave.module").then(m => m.SubordinatesLeaveModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
