import { Component, OnInit, OnChanges } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../service/music.service';

const code = new URLSearchParams(window.location.search).get('code');
console.log(`code is ${code}`);

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnChanges {
  music: Music[] = [];
  code: any;
  accessToken: string = '';
  searchTerm: string = '';
  constructor(private service: MusicService) {}

  ngOnChanges() {
    this.code = new URLSearchParams(window.location.search).get('code');
  }

  searchMusic() {
    this.service.searchMusic(this.searchTerm).subscribe((m) => (this.music = m));
  }
  getMusic() {
    this.service.getMusic(this.searchTerm).subscribe((m) => (this.music = m));
  }

  sortArtist() {
    this.service.sortArtist().subscribe((m) => (this.music = m));
  }

  sortSong() {
    this.service.sortSong().subscribe((m) => (this.music = m));
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
    });
  }

}
