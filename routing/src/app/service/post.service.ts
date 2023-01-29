import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable ({
    providedIn: 'root'
})
export class PostService {

accessToken: any;
token: any;

    // baseURL: string = "http://localhost:8100/socialvibez/messages";
        baseURL: string = "http://localhost:3001/posts"    
    constructor(private http: HttpClient) { 
        this.accessToken = localStorage.getItem('accessToken');
    }


    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseURL);
    }
    createPost(newPost: Post, token: any) {
        return this.http.post(this.baseURL, newPost, token);
    }



    getAccessToken(code: any) {
        return this.http.post('http://localhost:3001/login', { code });
      }
    

    ngOnInit(){}


}
