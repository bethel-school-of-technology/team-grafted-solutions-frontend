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
      Authorization: 'Bearer BQAQxb3NlheF3h5o2aFY5C8C7JaacYFxkQduDnvVUCuLYaooANrDy4mGO8zCJDq4I1QlaI_8peXlFuhKgU33f9yDmkMFcRsbJC1i9HdKS1jRoZj7x40',
    });

    return this.http.get(url, { headers });
  }

  getSearch(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist&market=es&limit=20`;

    const headers = new HttpHeaders({
      Authorization: 'BearerBQAQxb3NlheF3h5o2aFY5C8C7JaacYFxkQduDnvVUCuLYaooANrDy4mGO8zCJDq4I1QlaI_8peXlFuhKgU33f9yDmkMFcRsbJC1i9HdKS1jRoZj7x40',
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
