import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal
selectTabs = ""
newPost = '';
newHeadline= '';
post: any[] = [];
open_new_chat = false;
@Input() item: any;
segment = 'chats'

User = [
  {id:1, name: 'User1', photo:'https://i.pravatar.cc/325'},

]


  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.open_new_chat = false;
  }

  confirm() {
    this.modal.dismiss(this.post, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.newPost = ` ${ev.detail.data}`,
      this.newHeadline = ` ${ev.detail.data}`
    }
  }

  newChat() {}
  
  redirect() {

  }

  getChat(item){
    this.router.navigate(['/', 'socialvibez', 'messages', 'chats', item?.id])

  }

  constructor(
    private router: Router
  ) {}
  ngOnInit() {}
}
