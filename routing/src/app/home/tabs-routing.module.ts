import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../homepage/tab4.module').then((m) => m.Tab4PageModule),
      },

      {
        path: 'friends',
        loadChildren: () =>
          import('../friends/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('../music/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../messages/tab3.module').then((m) => m.Tab3PageModule),
      },

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/music',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
