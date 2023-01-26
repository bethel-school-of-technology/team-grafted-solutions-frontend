import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile1Page } from './profile1/profile1.page';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';

@NgModule({
  declarations: [Profile1Page, EditProfileComponent, PreviewModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [Profile1Page, EditProfileComponent, PreviewModalComponent],
})
export class SharedModule {}
