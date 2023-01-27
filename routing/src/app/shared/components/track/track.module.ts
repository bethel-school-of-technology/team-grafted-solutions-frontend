import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrackComponent } from './track.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TrackComponent],
  declarations: [TrackModule],
})
export class TrackModule {}
