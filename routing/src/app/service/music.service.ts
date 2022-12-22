import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root',
})
export class MusicService implements OnChanges {
  accessToken: any;

  dataSource: string = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem('accessToken');
  }

  onAccessTokenChange(newToken: string) {
    localStorage.setItem('accessToken', newToken);
    this.accessToken = newToken;
  }

  ngOnChanges() {
    this.onAccessTokenChange(JSON.stringify(localStorage.getItem('accessToken')));
  }

  getMusic(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?q=' + searchTerm + '&type=album', {
      headers: { Authorization: 'Bearer' + ' ' + this.accessToken },
    });
  }

  searchMusic(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?q=' + searchTerm + '&type=artist', {
      headers: {
        Authorization: 'Bearer BQCowKKGo364bKl9wI8eoldkqsqVBSJc2jia-WgANGhMR2Muuv5-igA1gd7cNXFurYTr0MOUdhRLXjY3YUMPeM1b5PM3D1-q-9wlzrsynr8k2-sUTJI',
      },
    });
  }

  getMusicByID(id: number): Observable<Music> {
    return this.http.get<Music>(this.dataSource + '/' + id);
  }

  createNewMusic(newMusic: Music): Observable<Music> {
    return this.http.post<Music>(this.dataSource, newMusic);
  }

  editMusicByID(id: number, edittedMusic: Music): Observable<Music> {
    return this.http.put<Music>(this.dataSource + '/' + id, edittedMusic);
  }

  deleteMusicByID(id: number): Observable<Music> {
    return this.http.delete<Music>(this.dataSource + '/' + id);
  }

  addMusic(edittedMusic: Music): Observable<Music> {
    return this.http.post<Music>(this.dataSource + '/', edittedMusic);
  }

  sortArtist(): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?_sort=artistName&_order=asc');
  }

  sortSong(): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?_sort=song&_order=asc');
  }

  getAccessToken(code: any) {
    return this.http.post('http://localhost:3001/login', { code });
  }
}
