import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from '../../services/user.service';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MatTableModule} from '@angular/material';
import {AppModule} from '../../app.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [

  ],
  providers: [UserService]
})
export class UserModule { }
