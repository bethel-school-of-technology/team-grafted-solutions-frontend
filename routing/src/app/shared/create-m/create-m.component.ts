import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { CrudServiceService } from '../../CRUD/crud-service.service';

@Component({
  selector: 'app-create-m',
  templateUrl: './create-m.component.html',
  styleUrls: ['./create-m.component.scss'],
})
export class CreateMComponent implements OnInit {

  constructor(
    private my: CrudServiceService
  ) { }

  title: string = '';
  messageLists: Message[] = [];
  ngOnInit(): void {
    this.title = this.my.title;
    this.my.getAllMessages() 
    .subscribe(response => this.messageLists = response);  
  }

}
