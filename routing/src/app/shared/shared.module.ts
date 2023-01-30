import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './components/track/track.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FriendsProfileComponent } from './components/friends-profile/friends-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlbumComponent } from './components/album/album.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';

@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    TrackComponent,
    ArtistComponent,
    FriendsProfileComponent,
    AlbumComponent,
    PreviewModalComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [ProfileComponent, EditProfileComponent, TrackComponent, ArtistComponent, FriendsProfileComponent, AlbumComponent, PreviewModalComponent],
})
export class SharedModule {}
