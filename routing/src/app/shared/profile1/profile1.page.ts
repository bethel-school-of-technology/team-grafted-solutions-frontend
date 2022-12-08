import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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

  constructor(private alertController: AlertController) {}

  handlerMessage = '';
  roleMessage = '';

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Edit Profile',
      buttons: [
        {
          text: 'Cancel',
          // role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'Saved',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
      inputs: [
        // {
        //   placeholder: 'Name',
        // },
        {
          type: 'textarea',
          placeholder: 'Favorite Genres',
        },
        // {
        //   type: 'number',
        //   placeholder: 'Age',
        //   min: 1,
        //   max: 100,
        // },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    this.roleMessage = `${role}`;
  }
  ngOnInit() {}
}
