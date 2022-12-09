import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { ProfileComponent } from '../shared/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../VibezFeed/feed.module').then((m) => m.FeedPageModule),
      },

      {
        path: 'friends',
        loadChildren: () =>
          import('../friends/friends.module').then((m) => m.FriendsPageModule),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('../music/music.module').then((m) => m.MusicPageModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../messages/messages.module').then(
            (m) => m.MessagesPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/socialvibez/music',
        pathMatch: 'full',      
      },
    ],
  },
  {
    path: 'socialvibez',
    redirectTo: '/socialvibez/music',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
