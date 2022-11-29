import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePage,
    children: [
      {
        path: 'friends',
        loadChildren: () =>
          import('../friends/friends.module').then((m) => m.FriendsPageModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../messages/messages.module').then(
            (m) => m.MessagesPageModule
          ),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('../music/music.module').then((m) => m.MusicPageModule),
      },
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
