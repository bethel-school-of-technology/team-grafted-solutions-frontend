import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/music';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  getMusic() {
    return this.http.get<Music[]>(this.dataSource);
  }
dataSource: string ='https://api.spotify.com/v1/search'

  constructor(private http: HttpClient) {}

  searchMusic(searchTerm: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.dataSource + "?q=" + searchTerm + "&type=artist", {headers: {'Authorization':'Bearer BQBZDS1c-qulmfx_J2hNBsN-1tPbuicNBEqvZ_CpqEwvn6NenrPNnv70gDEVali95QQBa9QWtd5XwAVm2tuzhkA5WYQUdMkMJZsvPfPMCfOZuy9j8bI'}});
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
