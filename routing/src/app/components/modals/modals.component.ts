import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {
  items:any[]=[]
  post: string;
  desc: any;
  constructor(
    private modalCtrl: ModalController,
    
    ) { }

addInput() {
  this.items.push({ Post: '' });
  console.log(this.items);
}

changeInPost(event, index) {
  // console.log(event, index);
  const value = event.detail.value;
  if (value?.legnth > 0) {
    if(!this.items[index + 1]) this.addInput();
    if(this.items[index].flag == 0) this.toggleFlag( index, 1);
  } else this.toggleFlag(index, 0);
}

toggleFlag(index, val) {
  this.items[index].flag = val;
}

checkEmptyInput() {
  console.log(this.items);
  if(this.items?.length > 1) {
    this.items = this.items.filter(
      element => (
        element.name.trim().length > 0
        ||
        (element.name.trim().length == 0 && element.flag == 1)
      )
    )
  }
}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  postMessage() {
    return this.modalCtrl.dismiss(this.post,'confirm');

  }

  ngOnInit() {
    this.addInput();
  }

}
