import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user.service';
import {UserTableComponent} from './components/user-table/user-table.component';
import {MatSortModule, MatTableModule} from '@angular/material';
import {AppModule} from '../../app.module';
import {NewUserComponent} from './components/new-user/new-user.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserPageComponent} from './components/user-page/user-page.component';
import {MatPaginatorModule} from '@angular/material';


@NgModule({
  declarations: [NewUserComponent, UserPageComponent, UserTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [NewUserComponent, UserTableComponent, UserPageComponent],
  providers: [UserService],
  entryComponents: [NewUserComponent]
})
export class UserModule {
}
