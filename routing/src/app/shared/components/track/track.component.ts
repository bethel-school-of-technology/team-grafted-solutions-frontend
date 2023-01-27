import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  accessToken: any;

  isModalOpen = false;
  music: any[] = [];
  code: any;
  @Input()
  public searchTerm: string = '';

  @Input()
  public t: any;
  presentingElement = null;

  constructor(private service: MusicService) {}

  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');
    this.getAccessToken(this.code);
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
