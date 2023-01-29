import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  public searchTerm: string = '';

  @Input()
  public a: any;

  constructor(private service: MusicService) {}

  ngOnInit() {
    this.getAccessToken(this.code);
  }

  getDetails() {
    let token = { token: JSON.parse(this.accessToken) };
    this.service.getDetails(this.searchTerm, token).subscribe((m) => {
      this.music = m;
    });
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
