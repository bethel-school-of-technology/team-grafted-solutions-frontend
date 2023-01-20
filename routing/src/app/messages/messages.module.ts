import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MessagesPage } from './messages.page';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from '../components/user-list/user-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MessagesPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [MessagesPage,UserListComponent],
})
export class MessagesPageModule {}
