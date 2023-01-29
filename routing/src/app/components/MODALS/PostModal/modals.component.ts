import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {
  accessToken: any;
  items:any[]=[];
  message: string;
  userData;
  post: any[] = [];
  newPost: Post;
  constructor(
    private modalCtrl: ModalController,
    private service: PostService
    
    ) { }

addInput() {
  this.items.push({ message: '', flag: 1 });
  console.log(this.items);
}

changeInInput(event, index) {
  // console.log(event, index);
  const value = event.detail.value;
  if (value?.legnth > 0) {
    if(!this.items[index + 1]) this.addInput();
    if(this.items[index].flag == 0) this.toggleFlag(index, 1);
   } else this.toggleFlag(index, 0);
}

toggleFlag(index, val) {
  this.items[index].flag = val;
}

checkEmptyInput() {
  console.log(this.items);
  if(this.items?.length > 1) {
    this.items = this.items.filter(
      element =>
        (element.name.trim().length > 0
        ||
        (element.name.trim().length == 0 && element.flag == 1))
      
    )
  }
}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  postMessage() {
    return this.modalCtrl.dismiss(this.message,'confirm');

  }

  ngOnInit() {
    this.addInput();
    let data = JSON.parse(localStorage.getItem('accessToken'));
    this.userData = data.userData;
    console.log(this.userData);

  }


  // createPost() {
  //   this.service.createPost(this.newPost).subscribe((p) => {
  //   })
  // }


  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result:any) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }

}
