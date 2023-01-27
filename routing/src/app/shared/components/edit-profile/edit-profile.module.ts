import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EditProfileComponent],
  declarations: [EditProfileComponent],
})
export class EditProfileModule {}
