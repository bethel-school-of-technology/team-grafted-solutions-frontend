import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-testpost',
  templateUrl: './testpost.component.html',
  styleUrls: ['./testpost.component.scss'],
})
export class TestpostComponent implements OnInit {
  baseURL = "http://localhost:3001/posts" 

  constructor(private service: PostService,
    private modalCtrl: ModalController,
    private http: HttpClient
    ) { 
      this.accessToken = localStorage.getItem('accessToken');
    }
    accessToken: any;
    userData;
    newPost: Post;
    artistId: string;






  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('accessToken'));
    this.userData = data.userData;
    console.log(this.userData);

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
    this.service.getAccessToken(code).subscribe((result:any) => {
      localStorage.setItem('accessToken', JSON.stringify(result));
      this.accessToken = localStorage.getItem('accessToken');
    });
  }


}
