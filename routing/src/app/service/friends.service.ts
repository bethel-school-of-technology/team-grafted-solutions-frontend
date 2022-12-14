import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friends } from '../models/friends';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  dataSource: string ='http://localhost:3001/friends/'

  getFriends() {
    return this.http.get<Friends[]>(this.dataSource);
  }

// dataSource: string ='https://api.spotify.com/v1/search'

// need new data source above for stored friends list 

  constructor(private http: HttpClient) {}

searchFriends(searchTerm: string): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.dataSource + 'search/' + searchTerm);
  }

getFriendsByID(id: number): Observable<Friends> {
  return this.http.get<Friends>(this.dataSource + "/" + id);
}

deleteFriendsByID(id: number): Observable<Friends> {
  return this.http.delete<Friends>(this.dataSource + "/" + id);

}

addFriends(edittedFriends: Friends): Observable<Friends> {
  return this.http.post<Friends>(this.dataSource + "/", edittedFriends);
}



sortFriends(): Observable<Friends[]> {
  return this.http.get<Friends[]>(this.dataSource + "?_sort=firstName&_order=asc");
}

}
