import { Component, OnInit, OnChanges } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../service/music.service';
import SpotifyWebApi from 'spotify-web-api-js'
import { AnimationController } from '@ionic/angular';


declare var cordova: any
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  accessToken: any;
  searchToken: any;
  spotifyApi = new SpotifyWebApi();
  music: any[] = [];
  code: any;
  searchTerm: string = '';
  public data = [this.music];
  public results = [...this.data];
  // loading: Loading;
  isModalOpen = false;

  

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.indexOf(query) > -1);
  }

  constructor(private service: MusicService, private animationCtrl: AnimationController) {}

  

  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');

    this.getAccessToken(this.code);
  }
  
  

  // searchMusic() {
  //   this.service.searchMusic(this.searchTerm).subscribe((m) => (this.music = m));
  // }

  // getSong() {
  //   let token = { token: JSON.parse(this.accessToken) };

  //   this.service.getSong(this.searchTerm, token).subscribe((m) => (this.music = m));
  // }

  // getArtist() {
  //   let token = { token: JSON.parse(this.accessToken) };

  //   this.service.getSong(this.searchTerm, token).subscribe((m) => (this.music = m));
  // }

  searchMusicTest() {
    let token = { token: JSON.parse(this.searchToken) };

    this.service.searchMusicTest(this.searchTerm, token).subscribe((m) => {
      this.music = m;
    });
  }

  // getMusic() {
  //   let token = { token: JSON.parse(this.accessToken) };

  //   this.service.getMusic(this.searchTerm).subscribe((m) => (this.music = m));
  // }

  sortArtist() {
    this.service.sortArtist().subscribe((m) => (this.music = m));
  }

  sortSong() {
    this.service.sortSong().subscribe((m) => (this.music = m));
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result:any) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      localStorage.setItem('searchToken', JSON.stringify(result.token));
      this.accessToken = localStorage.getItem('accessToken');
      this.searchToken = localStorage.getItem('searchToken')
    });
  }

  // getUserPlaylist(){
  //   this.loading = this.loadingCtrl.create({
  //     content: 'loading Playlist...'
  //   });
  //   this.loading.present();

  //   this.spotifyApi.getUserPlaylists().then(data => {
  //     if (this.loading) {
  //       this.loading.dismiss();
  //     }
  //   })
  // }
  getPreviewUrl() {
    let token = { token: JSON.parse(this.accessToken) };
      this.service.getPreviewUrl(this.searchTerm, token).subscribe((m) => {
      this.music = m;
    });
  }

  setOpen(isOpen: boolean){
    this.isModalOpen= isOpen
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
// }
}
