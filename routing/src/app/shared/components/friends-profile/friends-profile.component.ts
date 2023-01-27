import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.component.html',
  styleUrls: ['./friends-profile.component.scss'],
})
export class FriendsProfileComponent implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor() {}

  ngOnInit() {}
}
