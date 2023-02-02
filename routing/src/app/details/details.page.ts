import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input()
  artist: any = {};

  userData: any;

  @Input()
  public music: any[] = [];

  accessToken: any;
  code: any;
  searchTerm: string = '';

  @Input()
  public a: any;

  constructor(private service: MusicService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.getAccessToken(this.code);

    this.route.params.subscribe((params) => {
      let id = params['id'];
      let type = params['type'];

      console.log(type, id);
    });
  }

  getDetails() {
    let token = { token: JSON.parse(this.accessToken) };
    this.service.getDetails(this.searchTerm, token).subscribe((a) => {
      this.music = a;
    });
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });

    let data = JSON.parse(localStorage.getItem('accessToken')!);
    this.userData = data.userData;
    console.log(this.userData);
  }
}
