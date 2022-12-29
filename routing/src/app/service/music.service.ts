import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { flatMap, mergeMap, Observable } from 'rxjs';
import { Music } from '../models/music';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

public credentials = {

  clientId: '69372f48d4b24c099e581c69793c1879',
  clientSecret: '3fd83b37a78044e597517228a2cb6796',
  accessToken: ''
};


  dataSource: string = 'https://api.spotify.com/v1/search'
  // artistSource: string ='https://api.spotify.com/v1/search?q=Miles%20Davis&type=artist'



  constructor(private http: HttpClient) { 
    this.upDateToken()
  }

  upDateToken(){
    this.credentials.accessToken = sessionStorage.getItem('token') || '';
  }

  getMusic(searchTerm: string): Observable<Music> {
    return this.http.get<Music>(this.dataSource + "?q=" + searchTerm + "&type=artist", { headers: { 'Authorization': 'Bearer BQBp7Y5-OO177R0nhsEpVTK-PeS0c1KG_p3mRbgJuNn3MjI7IeasRj9o4NZhpjFcladWh-OYy_kTJ7l2nqK4slxEwftDwnLYDq51MLMf6SGmlI9e_9I' } });
  }
  // getArtist() {
  //   return this.http.get<Music[]>(this.artistSource);
  // }

  searchMusic(searchTerm: string): Observable<Music> {
    let token = this.setAuthorizationHeader();

    return token.pipe(mergeMap((result) => {

      return this.http.get<Music>(this.dataSource + "?q=" + searchTerm + "&type=artist", { headers: { 'Authorization': `Bearer ${result.access_token}` } });
    }));
  }

  

  getMusicByID(id: number): Observable<Music> {
    return this.http.get<Music>(this.dataSource + "/" + id);
  }

  // createNewMusic(newMusic: Music): Observable<Music> {
  //   return this.http.post<Music>(this.dataSource, newMusic);
  // }

  // editMusicByID(id: number, edittedMusic: Music): Observable<Music> {
  //   return this.http.put<Music>(this.dataSource + "/" + id, edittedMusic);
  // }

  // deleteMusicByID(id: number): Observable<Music> {
  //   return this.http.delete<Music>(this.dataSource + "/" + id);

  // }

  // addMusic(edittedMusic: Music): Observable<Music> {
  //   return this.http.post<Music>(this.dataSource + "/", edittedMusic);
  // }

  setAuthorizationHeader(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('69372f48d4b24c099e581c69793c1879:3fd83b37a78044e597517228a2cb6796'),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const payload = new HttpParams()
      .set('grant_type', 'client_credentials');

    return this.http.post<any>("https://accounts.spotify.com/api/token", payload, httpOptions);
  }

  sortArtist(): Observable<Music> {
    return this.http.get<Music>(this.dataSource + "?_sort=artistName&_order=asc");
  }

  sortSong(): Observable<Music> {
    return this.http.get<Music>(this.dataSource + "?_sort=song&_order=asc");
  }
}