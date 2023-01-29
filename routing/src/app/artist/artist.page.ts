import { Component, OnInit } from '@angular/core';
import { TestpostComponent } from '../components/testPost/testpost/testpost.component';
import { MusicService } from '../service/music.service';
import { ModalController } from '@ionic/angular';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  baseURL = "http://localhost:3001/posts" 

  music: any[] = [];
  accessToken: any;
  code: any;
  searchTerm: string = '';
  post: string;
  postData;
  artistId: string;
  newPost: Post;
  


  constructor(private service: MusicService,
    private modalCtrl: ModalController,
    private http: HttpClient

    ) {
      this.accessToken = localStorage.getItem('accessToken');

    }



  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('accessToken'));
    this.postData = data.postData;
    console.log(this.postData);
  
    this.getAccessToken(this.code);
  }


  async opentestPostModal() {
    const modal = await this.modalCtrl.create ({
      component: TestpostComponent,
    });
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      this.post = `${data}`;
    }
  }

  testPostMessage() {
    return this.modalCtrl.dismiss(this.newPost.message,'confirm');

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  createPost(newPost: Post): Observable<Post> {
    let token = { token: JSON.parse(this.accessToken)}
    console.log(this.accessToken)
    // // this.service.createPost(this.newPost, token).subscribe(() => {
    //   this.artistId = '2RdwBSPQiwcmiDo9kixcl8';

    // })
    console.log(this.newPost.title, this.newPost.message);

     return this.http.post<Post>(this.baseURL, newPost)
  }

  

  getAccessToken(code: any) {
    this.service.getAccessToken(code).subscribe((result) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }
}
