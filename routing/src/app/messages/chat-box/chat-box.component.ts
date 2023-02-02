import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { CreateMComponent } from 'src/app/shared/create-m/create-m.component';
import { CrudServiceService } from '../../CRUD/crud-service.service';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {

  @Input() chat: any;
  @Input() current_user_id;

  newMessage: Message;

  constructor(
    private my: CrudServiceService

  ) { }
  title: string = '';
  messageLists: Message[] = [];


  ngOnInit(): void {
    // this.title = this.my.title;
    // this.my.getAllMessages() 
    // .subscribe(response => this.messageLists = response);  

  }

}
