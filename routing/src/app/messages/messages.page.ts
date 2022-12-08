import { Component, OnInit, ViewChild } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { IonModal } from '@ionic/angular';
// import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {}
}
