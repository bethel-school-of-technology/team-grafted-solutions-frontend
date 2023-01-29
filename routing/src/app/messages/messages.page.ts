import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Observable } from 'rxjs';
import { ChatService } from '../service/chat/chat.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { ModalController } from '@ionic/angular';
import { ModalsComponent } from '../components/MODALS/PostModal/modals.component';
import { TestpostComponent } from '../components/testPost/testpost/testpost.component';
import { Message } from '../models/message';
import { CrudServiceService } from '../CRUD/crud-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
postData;
private usersRoute='http://localhost:3001/users/currentUser'
public currentUser: User[];
  global: any;

constructor(
  private chatService: ChatService,
  private router: Router,
  private http: HttpClient,
  private modalCtrl: ModalController,
  private my: CrudServiceService
) { }




async opentestPostModal() {
  const modal = await this.modalCtrl.create ({
    component: TestpostComponent,
  });
  modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    this.post = `${data}`;
  }
}


async openModal() {
  const modal = await this.modalCtrl.create({
    component: ModalsComponent,
  });
  modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    this.post = `${data}`;
    
  }

}

getCurrentUser(){
  this.http.get<User[]>(this.usersRoute).subscribe(User => {
    this.currentUser = this.currentUser;
    console.log('User', this.users)
  })
}
ngOnInit() {
  let data = JSON.parse(localStorage.getItem('accessToken'));
  this.postData = data.postData;
  console.log(this.postData);

  this.title = this.my.title;
  this.my.getAllMessages()
  .subscribe(response => {
    this.messageList = response
  })

}



  @ViewChild(IonModal)
  modal!: IonModal
selectTabs = ""
newHeadline= '';
post: string;
title: string = '';
messageList: Message[]=[];
items:any[]=[];
postMessage: string;



open_new_chat = false;
@Input() item: any;
segment = 'chats'
// users: Observable<any[]>;
userData;


users = [
  {id: 1, name: 'User1', photo:'https://i.pravatar.cc/325'},
  {id: 2, name: 'User2', photo:'https://i.pravatar.cc/315'},


];
chatRooms = [
  {id: 1, name: 'User1', photo:'https://i.pravatar.cc/325'},
  {id: 2, name: 'User2', photo:'https://i.pravatar.cc/315'},

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
      this.newHeadline = ` ${ev.detail.data}`
    }
  }

  newChat(item) {
    this.open_new_chat=true;
    // if(!this.users) this.getUsers();
        this.router.navigate(['/', 'socialvibez', 'messages', 'chats', item?.id])

  }

  // async startChat(item) {
  //   try {
  //     // this.global.showLoader();
  //     //create chatroom
  //     const room = await this.chatService.createChatRoom(item?.uid);
  //     console.log('room: ',room);
  //     this.cancel();
  //     const navData: NavigationExtras = {
  //       queryParams: {
  //         name: item?.name
  //       }
  //     };
  //     this.router.navigate(['/', 'socialvibez', 'chats', room?.id], navData);
  //     this.global.hideLoader();
  //   } catch(e) {
  //     console.log(e);
  //     this.global.hideLoader();
  //   }
  // }

  getUsers() {
  }
  
  redirect() {

  }

  getChat(item){
    this.router.navigate(['/', 'socialvibez', 'messages', 'chats', item?.id])

  }

}
