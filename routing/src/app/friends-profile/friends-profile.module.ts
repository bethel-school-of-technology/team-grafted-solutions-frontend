import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsProfilePageRoutingModule } from './friends-profile-routing.module';

import { FriendsProfilePage } from './friends-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsProfilePageRoutingModule
  ],
  declarations: [FriendsProfilePage]
})
export class FriendsProfilePageModule {}
