import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsPage } from '../friends/friends.page';
import { MessagesPage } from '../messages/messages.page';
import { MusicPage } from '../music/music.page';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: 'messages',
        component: MessagesPage,
      },
      {
        path: 'friends',
        component: FriendsPage,
      },
      {
        path: 'music',
        component: MusicPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
