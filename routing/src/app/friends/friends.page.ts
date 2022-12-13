import { Component, OnInit } from '@angular/core';
import { Friends } from '../models/friends';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends: Friends[] = [];
  searchTerm: string = ""
  constructor(private service: FriendsService) { }

  ngOnInit() {}

  // searchFriends(){
  //   this.service.searchFriends(this.searchTerm).subscribe(f=> this.friends = f);
  // }
}
