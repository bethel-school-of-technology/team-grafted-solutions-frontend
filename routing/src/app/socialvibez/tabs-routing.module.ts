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
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then((m) => m.ProfilePageModule),
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
        path: 'details',
        loadChildren: () => import('../details/details.module').then((m) => m.DetailsPageModule),
      },

      {
        path: '',
        redirectTo: '/socialvibez/music',
        pathMatch: 'full',
      },
      {
        path: '**',
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
