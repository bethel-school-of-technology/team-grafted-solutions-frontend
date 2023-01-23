import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  @Input() items: any[] = [];

  artists: any[] = [];
  loading: boolean = false;
  // term: string = '';
  public data = [this.artists];
  public results = [...this.data];

  constructor(private spotify: QueryService, private router: Router) {}

  search(term: string) {
    this.loading = true;
    this.spotify.getArtists(term).subscribe((data: any) => {
      this.artists = data.artists.items;
      this.loading = false;
    });
  }

  getArtist(item: any) {
    let artistId;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists.id;
    }
    console.log(artistId);
    this.router.navigate(['/artist', artistId]);
  }

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.indexOf(query) > -1);
  }

  cancel() {
    console.log('cancel called');
    this.artists = [];
  }
}
