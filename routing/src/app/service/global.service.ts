import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable() // provide service in module
export class GlobalService {

  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBwQqZL1bBnXtrvcR6ddwk5uNtDSzQ0HYFsaFppDBB5jKSfU1rIyW1FUTt2Qi4QhyZx9C9ugFuf26govCOgfYkD2SpD53kESq43bOtYPpF53YkAXKM'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}