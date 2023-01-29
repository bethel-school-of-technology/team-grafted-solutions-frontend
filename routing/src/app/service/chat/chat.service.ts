import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  accessToken: any;
  token: any;

  baseURL: string = "http://localhost:3001/messages"    

  listOfMessages: Message[] = [{
    message: "this is my newest message"
  }];
  title: string = "my messages";

  currentUserId: string;
  public users: Observable<any>;
  public chatRooms: Observable<any>;
  api: any;
newMessage: Message;

  constructor(private http: HttpClient) { 
    this.accessToken = localStorage.getItem('accessToken');
  }

  getAllMessages(): Observable<Message[]> {
return this.http.get<Message[]>(this.baseURL);
  }

  createMessage(newMessage: Message, token: any) {
    return this.http.post(this.baseURL, newMessage, token);
  }

  getAccessToken(code: any) {
    return this.http.post('http://localhost:3001/login', { code });
  }


  ngOnInit(){

  }



  // async createChatRoom(user_id) {
  // try {
  //   //check for existing chatroom
  //   let room: any;
  //   const querySnapshot = await this.api.getDocs(
  //     'chatRooms',
  //     this.api.whereQuery(
  //       'members',
  //       'in',
  //       [[user_id, this.currentUserId], [this.currentUserId, user_id]]
  //     )
  //   );
  //   room = await querySnapshot.docs.map((doc: any) => {
  //     let item = doc.data();
  //     item.id = doc.id;
  //     return item;
  //   });
  //   console.log('exist docs: ', room);
  //   if(room?.length > 0) return room[0];
  //   const data = {
  //     members: [
  //       this.currentUserId,
  //       user_id
  //     ],
  //     type: 'private',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };
  //   room = await this.api.addDocument('chatRooms', data);
  //   return room;
  // } catch(e) {
  //   throw(e);
  // }

  // }
}
