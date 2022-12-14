import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/music';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

dataSource: string ='https://api.spotify.com/v1/search'
// artistSource: string ='https://api.spotify.com/v1/search?q=Miles%20Davis&type=artist'

  constructor(private http: HttpClient) {}

  getMusic(searchTerm: string): Observable<Music[]>  {
    return this.http.get<Music[]>(this.dataSource + "?q=" + searchTerm + "&type=artist", {headers: {'Authorization':'Bearer BQCowKKGo364bKl9wI8eoldkqsqVBSJc2jia-WgANGhMR2Muuv5-igA1gd7cNXFurYTr0MOUdhRLXjY3YUMPeM1b5PM3D1-q-9wlzrsynr8k2-sUTJI'}});
  }
  // getArtist() {
  //   return this.http.get<Music[]>(this.artistSource);
  // }

  searchMusic(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + "?q=" + searchTerm + "&type=artist", {headers: {'Authorization':'Bearer BQCowKKGo364bKl9wI8eoldkqsqVBSJc2jia-WgANGhMR2Muuv5-igA1gd7cNXFurYTr0MOUdhRLXjY3YUMPeM1b5PM3D1-q-9wlzrsynr8k2-sUTJI'}});
  }

getMusicByID(id: number): Observable<Music> {
  return this.http.get<Music>(this.dataSource + "/" + id);
}

createNewMusic(newMusic: Music): Observable<Music>{
  return this.http.post<Music>(this.dataSource, newMusic);
}

editMusicByID(id: number, edittedMusic: Music): Observable<Music> {
  return this.http.put<Music>(this.dataSource + "/" + id, edittedMusic);
}

deleteMusicByID(id: number): Observable<Music> {
  return this.http.delete<Music>(this.dataSource + "/" + id);

}

addMusic(edittedMusic: Music): Observable<Music> {
  return this.http.post<Music>(this.dataSource + "/", edittedMusic);
}



sortArtist(): Observable<Music[]> {
  return this.http.get<Music[]>(this.dataSource + "?_sort=artistName&_order=asc");
}

sortSong(): Observable<Music[]> {
  return this.http.get<Music[]>(this.dataSource + "?_sort=song&_order=asc");
}
}
