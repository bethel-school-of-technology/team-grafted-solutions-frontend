import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile1Page } from './profile1/profile1.page';
// import { SendMessagesPage } from './send-messages/send-messages.page';

@NgModule({
  declarations: [Profile1Page, EditProfileComponent],
  imports: [CommonModule, IonicModule],
  exports: [Profile1Page],
})
export class SharedModule {}
