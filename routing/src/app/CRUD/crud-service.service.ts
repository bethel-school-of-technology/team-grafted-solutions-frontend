import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class CrudServiceService {
  baseURL: string = 'http://localhost:3001/messages';

  listOfMessages: Message[] = [
    {
      message: 'this is my newest message',
    },
  ];
  title: string = 'my messages';
  constructor(private http: HttpClient) {}

  // getAllMessages(): Observable<Message[]> {
  //   return of (this.listOfMessages);
  // }

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseURL);
  }

  createNewMessage(newMessage: any): Observable<Message> {
    return this.http.post<Message>(this.baseURL, newMessage);
  }
}
