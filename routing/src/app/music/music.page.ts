import { Component, OnInit, OnChanges } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../service/music.service';
import { AnimationController } from '@ionic/angular';
import { modalController } from '@ionic/core';


declare var cordova: any
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  accessToken: any;
  searchToken: any;
  music: any[] = [];
  code: any;
  searchTerm: string = '';
  public data = [this.music];
  public results = [...this.data];
  isModalOpen = false;
  presentingElement = null;


  

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.indexOf(query) > -1);
  }

  constructor(private service: MusicService, private animationCtrl: AnimationController) {}

  

  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');
    this.getAccessToken(this.code);

  }

  searchMusicTest() {
    let token = { token: JSON.parse(this.accessToken) };

    this.service.searchMusicTest(this.searchTerm, token).subscribe((m) => {
      this.music = m;
    });
  }

  sortArtist() {
    this.service.sortArtist().subscribe((m) => (this.music = m));
  }

  sortSong() {
    this.service.sortSong().subscribe((m) => (this.music = m));
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result:any) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      localStorage.setItem('searchToken', JSON.stringify(result.token));
      this.accessToken = localStorage.getItem('accessToken');
      this.searchToken = localStorage.getItem('searchToken')
    });
  }
  getPreviewUrl() {
    let token = { token: JSON.parse(this.accessToken) };
      this.service.getPreviewUrl(this.searchTerm, token).subscribe((m) => {
      this.music = m;
    });
  }

  setOpen(isOpen: boolean){
    this.isModalOpen= isOpen
  }

  setClose(isOpen: boolean) {
    this.isModalOpen = !isOpen;
  }
}
