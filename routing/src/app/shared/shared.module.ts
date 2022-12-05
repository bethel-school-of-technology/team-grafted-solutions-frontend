import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile1Page } from './profile1/profile1.page';

@NgModule({
  declarations: [Profile1Page],
  imports: [CommonModule, IonicModule],
  exports: [Profile1Page],
})
export class SharedModule {}
