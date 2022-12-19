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

  getMusic(searchTerm: string): Observable<Music>  {
    return this.http.get<Music>(this.dataSource + "?q=" + searchTerm + "&type=artist", {headers: {'Authorization':'Bearer BQBp7Y5-OO177R0nhsEpVTK-PeS0c1KG_p3mRbgJuNn3MjI7IeasRj9o4NZhpjFcladWh-OYy_kTJ7l2nqK4slxEwftDwnLYDq51MLMf6SGmlI9e_9I'}});
  }
  // getArtist() {
  //   return this.http.get<Music[]>(this.artistSource);
  // }

  searchMusic(searchTerm: string): Observable<Music> {
    return this.http.get<Music>(this.dataSource + "?q=" + searchTerm + "&type=artist", {headers: {'Authorization':'Bearer BQBp7Y5-OO177R0nhsEpVTK-PeS0c1KG_p3mRbgJuNn3MjI7IeasRj9o4NZhpjFcladWh-OYy_kTJ7l2nqK4slxEwftDwnLYDq51MLMf6SGmlI9e_9I'}});
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



sortArtist(): Observable<Music> {
  return this.http.get<Music>(this.dataSource + "?_sort=artistName&_order=asc");
}

sortSong(): Observable<Music> {
  return this.http.get<Music>(this.dataSource + "?_sort=song&_order=asc");
}
}
