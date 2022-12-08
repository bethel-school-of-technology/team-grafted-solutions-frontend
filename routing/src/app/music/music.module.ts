import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MusicPageRoutingModule } from './music-routing.module';
import { MusicPage } from './music.page';
import { SharedModule } from '../shared/shared.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicPageRoutingModule,
    ExploreContainerComponentModule,
    SharedModule,
  ],
  declarations: [MusicPage],
})
export class MusicPageModule {}
