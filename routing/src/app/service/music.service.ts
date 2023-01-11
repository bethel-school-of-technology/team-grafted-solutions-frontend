import { Injectable, OnChanges, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root',
})

export class MusicService implements OnInit {
  accessToken: any;

  dataSource: string = 'https://api.spotify.com/v1/search';
  // dataSource: String = 'https://api.spotify.com/v1/artists/{id}'

  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem('accessToken');
  }

  ngOnInit() {
  }

  getMusic(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?q=' + searchTerm + '&type=artist%2Calbum%2Ctrack"', {
      headers: { Authorization: 'Bearer' + ' ' + this.accessToken },
    });
  }

  getArtist(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?q=' + searchTerm + '&type=artist', {
      headers: { Authorization: 'Bearer' + ' ' + this.accessToken },
    });
  }

  // searchMusicTest(searchTerm: string, token: any): Observable<Music[]> {
  //   return this.http.post<Music[]>('http://localhost:3001/songs/search/' + searchTerm, token);
  // }

  searchArtists(searchTerm: string, token: any): Observable<Music[]> {
    return this.http.post<Music[]>('http://localhost:3001/songs/search/' + searchTerm, token);
  }

  searchMusic(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + '?q=' + searchTerm + '&type=album', {
      headers: { Authorization: 'Bearer' + ' ' + this.accessToken },
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

  // getAlbumByID(id: number): Observable<Music> {
  //   return this.http.get<Music>(this.dataSource + '/' + id);
  // }

  // getAlbumPhoto(id: number): Observable<Music> {
  //   return this.http.get<Music>(this.dataSource + '/' + id);
  // }

  getAccessToken(code: any) {
    return this.http.post('http://localhost:3001/login', { code });
  }
  getAlbumByID(searchTerm: string, token: any): Observable<Music[]> {
    return this.http.post<Music[]>('http://localhost:3001/songs/search/' + searchTerm, token);
  }
  getAlbumPhoto(searchTerm: string, token: any): Observable<Music[]> {
    return this.http.post<Music[]>('http://localhost:3001/songs/search/' + searchTerm, token);
  }
  getAlbum(searchTerm: string, token: any): Observable<Music[]> {
    return this.http.post<Music[]>('http://localhost:3001/songs/search/' + searchTerm, token);
  }
}
