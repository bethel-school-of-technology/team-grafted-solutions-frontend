import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

          //replace 'sender' w/ the users name
  name: string = 'Sender';
  message: string;
  isLoading = false;
  currentUserId = 1
  chats = [
    {id: 1, sender: 1, message: 'hi how are you'},
    {id: 2, sender: 2, message: 'hello there'},

  ];


  constructor() { }

  ngOnInit() {
  }

  sendMessage () {

  }
}
