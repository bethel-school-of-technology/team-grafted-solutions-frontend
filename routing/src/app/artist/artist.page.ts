import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  user: any[] = [];
  music: any[] = [];
  accessToken: any;
  code: any;
  searchTerm: string = '';

  constructor(private service: MusicService) {}

  ngOnInit() {
    this.getAccessToken(this.code);
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
