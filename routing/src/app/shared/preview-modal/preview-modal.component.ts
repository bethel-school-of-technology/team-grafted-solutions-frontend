import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../../service/music.service';
import { AnimationController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
// import { Music } from '../models/music';




@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss'],
})
export class PreviewModalComponent implements OnInit {
  accessToken: any;

  isModalOpen = false;
  music: any[] = [];
  code: any;
  @Input()
  public searchTerm: string = '';

  @Input()
  public m: any;

  public data = [this.music];
  public results = [...this.data];
  presentingElement = null;

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.indexOf(query) > -1);
  }


  constructor(private service: MusicService, private animationCtrl: AnimationController, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.code = new URLSearchParams(window.location.search).get('code');
    this.getAccessToken(this.code);
    
  }

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }

  getPreviewUrl() {
    let token = { token: JSON.parse(this.accessToken) };
      this.service.getPreviewUrl(this.searchTerm, token).subscribe((m) => {
      this.music = m;
    });
  }

  setOpen(isOpen: boolean){
    this.isModalOpen= isOpen;
    console.log(this.searchTerm);
    console.log(this.m)
  }

  setClose(isOpen: boolean) {
    this.isModalOpen = !isOpen;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PreviewModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `${data}!`;
    //   this.bio = `${data}`;
    // }
  }
}
