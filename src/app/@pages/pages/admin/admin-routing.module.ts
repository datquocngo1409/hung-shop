import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUserListComponent} from './user/admin-user-list/admin-user-list.component';
import {AdminUserDetailComponent} from './user/admin-user-detail/admin-user-detail.component';

const routes: Routes = [
  {
    path: 'user',
    component: AdminUserListComponent
  },
  {
    path: 'user/:id',
    component: AdminUserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
