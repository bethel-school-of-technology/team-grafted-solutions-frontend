import { Component, OnInit } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';
@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setClose(isOpen: boolean) {
    this.isModalOpen = !isOpen;
  }

  ngOnInit() {}
}
