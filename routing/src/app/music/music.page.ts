import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  music!: Music;
  searchTerm: string = '';
  constructor(private service: MusicService) {}

  ngOnInit() {}

  searchMusic() {
    this.service.searchMusic(this.searchTerm).subscribe((m) => (this.music = m));
  }
  // searchItem(){
  //   this.service.searchItem(this.searchTerm).subscribe(m=> this.music = m);
  // }

  sortArtist() {
    this.service.sortArtist().subscribe((m) => (this.music = m));
  }

  sortSong() {
    this.service.sortSong().subscribe((m) => (this.music = m));
  }
}
