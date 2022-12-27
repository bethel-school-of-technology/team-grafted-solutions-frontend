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
    localStorage.setItem('accessToken', JSON.stringify(this.getAccessToken(this.code)));
    this.accessToken = localStorage.getItem('accessToken');
  }

  searchMusic() {
    this.service.searchMusic(this.searchTerm).subscribe((m) => (this.music = m));
  }

  searchMusicTest() {
    let data = JSON.parse(this.accessToken);
    localStorage.getItem('accessToken')
    let token = { token: data };

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
    });
  }
}
