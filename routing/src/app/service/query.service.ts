import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicService } from './music.service';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  accessToken: any;
  code: any;
  constructor(private http: HttpClient, private service: MusicService) {}

  public getQuery(query: string) {
    const code = (this.accessToken = localStorage.getItem('accessToken'));

    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer `${code}` ',
    });

    return this.http.get(url, { headers });
  }
  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');

    this.getAccessToken(this.code);
  }
  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
