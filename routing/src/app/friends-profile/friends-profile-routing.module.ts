import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsProfilePage } from './friends-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FriendsProfilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsProfilePageRoutingModule {}
