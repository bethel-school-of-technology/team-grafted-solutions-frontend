import { Component, OnInit } from '@angular/core';
import { Friends } from '../models/friends';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  listOfFriends: any;
  friends: Friends[] = [];
  searchTerm: string = ""
  dataSource: any;
  constructor(private service: FriendsService) { }

  ngOnInit(): void {
    this.service.getFriends().subscribe(result =>{
      this.listOfFriends = result;
    });
  }

  searchFriends(){
    this.service.searchFriends(this.searchTerm).subscribe(f => {
      this.friends = f;
    });
  }

  getFriends(){
    this.service.getFriends().subscribe(f=> this.friends = f);
  }
}
