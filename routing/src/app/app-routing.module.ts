import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'friends',
    loadChildren: () =>
      import('./friends/tab1.module').then((m) => m.Tab1PageModule),
  },

  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/tab2.module').then((m) => m.Tab2PageModule),
  },

  {
    path: 'tab3',
    loadChildren: () =>
      import('./music/tab3.module').then((m) => m.Tab3PageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
