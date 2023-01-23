import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {
    console.log('Spotify ready');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBawx5utAEtvb3eSfLt2T2J1f_1UsRvqwLbX2_hz9qKaPVI7BmiJOpdWNbzkjyf_6uBRK4JZGvlIv4dAUDrqzFIj0oYsC34V2TUDv_IR6dhpqNBGfY',
    });

    return this.http.get(url, { headers });
  }

  getSearch(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist&market=es&limit=20`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBawx5utAEtvb3eSfLt2T2J1f_1UsRvqwLbX2_hz9qKaPVI7BmiJOpdWNbzkjyf_6uBRK4JZGvlIv4dAUDrqzFIj0oYsC34V2TUDv_IR6dhpqNBGfY',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20');
  }

  getArtists(term: string) {
    return this.getQuery('search?q=' + term + '&type=artist&limit=1');
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`);
  }
}
