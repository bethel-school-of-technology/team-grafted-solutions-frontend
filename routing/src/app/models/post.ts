export class Post {
     postId: number;
     pageId: number;
     userId: string;
     display_name: string;
     title: string;
     message: string;
     createdAt?: Date;
     updatedAt?: Date;

     constructor(postId: number, pageId: number, userId: string, display_name: string, title: string, message: string, createdAt?: Date, updatedAt?: Date, ) {
          this.postId = postId;
          this.pageId = pageId;
          this.userId = userId;
          this.display_name = display_name;
          this.title = title;
          this.message = message;
          this.createdAt = createdAt;
          this.updatedAt = updatedAt;
     }

}

