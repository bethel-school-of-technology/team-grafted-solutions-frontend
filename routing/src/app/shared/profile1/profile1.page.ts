import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from '../components/profile/profile.component';
import { MusicPage } from 'src/app/music/music.page';
@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
  isModalOpen = false;
  user: any[] = [];
  music: any[] = [];
  userData: any;
  accessToken: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setClose(isOpen: boolean) {
    this.isModalOpen = !isOpen;
  }
  message = '';
  bio = '';
  constructor(private modalCtrl: ModalController) {}
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
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('accessToken')!);
    this.userData = data.userData;
    console.log(this.userData);
  }
}
