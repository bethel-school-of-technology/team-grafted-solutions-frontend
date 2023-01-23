import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage {
  music: any[] = [];
  artist: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: QueryService) {
    this.loadingArtist = true;

    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;

      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((data: any) => {
      console.log(this.topTracks);
      this.topTracks = data.topTracks;
    });
  }
}
