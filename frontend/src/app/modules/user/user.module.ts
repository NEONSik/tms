import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserService} from '../../services/user.service';
import {UserTableComponent} from './components/user-table/user-table.component';


@NgModule({
  declarations: [UserDetailsComponent, UserTableComponent],
  imports: [
    CommonModule
  ],
  exports: [UserDetailsComponent, UserTableComponent],
  providers: [UserService]
})
export class UserModule {
}
