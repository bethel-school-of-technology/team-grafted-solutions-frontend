import { Component, OnInit, OnChanges } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  accessToken: any;
  // music: Music[] = [];
  music: any[] = [];
  code: any;
  searchTerm: string = '';
  public data = [this.music];
  public results = [...this.data];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.indexOf(query) > -1);
  }

  constructor(private service: MusicService) {}

  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');

    this.getAccessToken(this.code);

    window.history.pushState({}, '', "/")

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

  cancel() {
    console.log('cancel called');
    this.music = [];
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
      localStorage.setItem('accessToken', JSON.stringify(result.token));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
