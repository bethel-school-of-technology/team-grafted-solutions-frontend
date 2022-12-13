import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.page.html',
  styleUrls: ['./friends-profile.page.scss'],
})
export class FriendsProfilePage implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor() {}

  ngOnInit() {}
}
