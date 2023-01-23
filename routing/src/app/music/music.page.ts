import { Component, OnInit, OnChanges } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../service/music.service';
import SpotifyWebApi from 'spotify-web-api-js'
// import { LoadingController, Loading } from '@ionic/angular';


declare var cordova: any
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  accessToken: any;
  spotifyApi = new SpotifyWebApi();
  music: any[] = [];
  code: any;
  searchTerm: string = '';
  public data = [this.music];
  public results = [...this.data];
  // loading: Loading;

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.indexOf(query) > -1);
  }

  constructor(private service: MusicService) {}

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
    let token = { token: JSON.parse(this.accessToken) };

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
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
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
}
