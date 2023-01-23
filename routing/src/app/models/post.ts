export class Post {
     postId: number;
     userId: string;
     display_name: string;
     title: string;
     message: string;
     createdAt?: Date;
     updatedAt?: Date;

     constructor(id?: number, userId?: string, display_name?: string, title?: string, message?: string, createdAt?: Date, updatedAt?: Date) {
          this.postId = id;
          this.userId = userId;
          this.display_name = display_name;
          this.title = title;
          this.message = message;
          this.createdAt = createdAt;
          this.updatedAt = updatedAt;
     }

}

