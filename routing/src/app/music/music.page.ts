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
  music: Music[] = [];
  code: any;
  searchTerm: string = '';
  constructor(private service: MusicService) {}

  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');

    this.getAccessToken(this.code);

  }

  searchMusic() {
    this.service.searchMusic(this.searchTerm).subscribe((m) => (this.music = m));
  }

  searchMusicTest() {
    let token = { token: JSON.parse(this.accessToken) };

    this.service.searchMusicTest(this.searchTerm, token).subscribe(m => {
      this.music = m;
    });
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
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
