import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUserId: string;
  public users: Observable<any>;
  createChatRoom: any;

  constructor() { }
}
