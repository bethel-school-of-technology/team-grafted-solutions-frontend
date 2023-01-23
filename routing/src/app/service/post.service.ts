import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable ({
    providedIn: 'root'
})
export class PostService {
    baseURL: string = "http://localhost:8100/socialvibez/artist";
        // baseURL: string = "http://localhost:3000/posts"    
    constructor(private http: HttpClient) { }


    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseURL);
    }
    createPost(newPost: Post) {
        return this.http.post(this.baseURL, newPost)
    }
}