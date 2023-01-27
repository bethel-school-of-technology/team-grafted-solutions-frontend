import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
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
