import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/CRUD/crud-service.service';

@Component({
  selector: 'app-delete-m',
  templateUrl: './delete-m.component.html',
  styleUrls: ['./delete-m.component.css']
})
export class DeleteMComponent implements OnInit {

  constructor(private service: CrudServiceService) { }

  ngOnInit(): void {
  }
  deleteMessage(id:number){
    console.log("Testing"+ id);
   this.service.deleteMessage(id).subscribe(response => {
  console.log(response);
  this.ngOnInit();
   })
  }
}
