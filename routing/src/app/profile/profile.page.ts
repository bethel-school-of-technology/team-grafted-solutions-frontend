import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input()
  public user: any[] = [];
  @Input()
  public music: any[] = [];
  public userData: any;
  accessToken: any;

  likedSongs() {}

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
<<<<<<< HEAD
    // let data = JSON.parse(localStorage.getItem('accessToken'));
    // this.userData = data.userData;
    // console.log(this.userData);
    // this.likedSongs();
=======
    let data = JSON.parse(localStorage.getItem('accessToken')!);
    this.userData = data.userData;
    console.log(this.userData);
>>>>>>> Andy-dev
  }
}
