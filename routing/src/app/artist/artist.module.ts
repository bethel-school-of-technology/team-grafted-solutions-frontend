import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistPageRoutingModule } from './artist-routing.module';

import { ArtistPage } from './artist.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ArtistPageRoutingModule, SharedModule, ],
  declarations: [ArtistPage],
})
export class ArtistPageModule {}
