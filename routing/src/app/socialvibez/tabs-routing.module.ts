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
        path: 'friends',
        loadChildren: () => import('../friends/friends.module').then((m) => m.FriendsPageModule),
      },
      {
        path: 'music',
        loadChildren: () => import('../music/music.module').then((m) => m.MusicPageModule),
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then((m) => m.MessagesPageModule),
      },
      {
        path: 'artist',
        loadChildren: () => import('../artist/artist.module').then((m) => m.ArtistPageModule),
      },
      {
        path: 'friends-profile',
        loadChildren: () => import('../friends-profile/friends-profile.module').then((m) => m.FriendsProfilePageModule),
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then((m) => m.SearchPageModule),
      },
      // {
      //   path: 'cards',
      //   loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
      // },
      {
        path: '',
        redirectTo: '/socialvibez/music',
        pathMatch: 'full',
      },
      { path: '**', pathMatch: 'full', redirectTo: '/socialvibez/music' },
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
