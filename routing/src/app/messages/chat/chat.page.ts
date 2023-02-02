import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import { HttpClient } from '@angular/common/http';
import { ChatService } from 'src/app/service/chat/chat.service';
import { CreateMComponent } from 'src/app/shared/create-m/create-m.component';
import { CrudServiceService } from 'src/app/CRUD/crud-service.service';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  baseURL = 'http://localhost:3001/messages';
  accessToken: any;
  newMessage: any;
  searchToken: any;
  makeMessage: Message = new Message();
  code: any;
  title: string = '';
  currentUserId = 1;
  searchTerm: any;



  chats = [
    {id: 1, sender: 1, message1:'Did you guys hear Elevations new Album???'},

    {id: 2, sender: 2, message2:'YEAH IT WAS AMAZING'},

    {id: 3, sender: 3, message3: 'What do you think I am listening to right now?!?!?'},

    {id: 4, sender: 4, message4: 'this might be their best one yet!'},

    {id: 5, sender: 5, message5:'I agree^^'},

    {id: 6, sender: 6, message6:'I havent stopped playing it'},

  ];

  constructor(private c: ChatService, private http: HttpClient, private crud: CrudServiceService, private service: MusicService) {
    // this.accessToken = localStorage.getItem('accessToken');
    let data: any = JSON.parse(localStorage.getItem('accessToken'));
    this.accessToken = data.token;
  }

  createMessage(newMessage: Message): Observable<Message[]> {
    console.log(newMessage);
    return this.http.post<Message[]>(this.baseURL, newMessage);
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result: any) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      localStorage.setItem('searchToken', JSON.stringify(result.token));
      this.accessToken = localStorage.getItem('accessToken');
      this.searchToken = localStorage.getItem('searchToken');
    });
  }

  onSubmit() {
    // let token = { token: JSON.parse(this.accessToken) };

    // // this.crud.createNewMessage(this.newMessage).subscribe(response => {
    // //   console.log(response);

    //   this.crud.createNewMessage(this.searchTerm).subscribe((m) => {
    //     this.newMessage = m;

    // });

    this.crud.createNewMessages().subscribe((m) => {
      this.newMessage = m;
    });
  }

  
  ngOnInit(): void {
    this.code = new URLSearchParams(window.location.search).get('code');

    // this.getAccessToken(this.code);

    this.title = this.crud.title;
    // this.crud.getAllMessages().subscribe((response) => (this.messageLists = response));
  }

}
