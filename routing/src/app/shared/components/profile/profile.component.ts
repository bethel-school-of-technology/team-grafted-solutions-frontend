import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isModalOpen = false;
  user: any[] = [];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setClose(isOpen: boolean) {
    this.isModalOpen = !isOpen;
  }
  message = '';
  bio = '';
  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `${data}!`;
      this.bio = `${data}`;
    }
  }
}
