import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user.service';
import {UserTableComponent} from './components/user-table/user-table.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatListModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {AppModule} from '../../app.module';
import {NewUserComponent} from './components/new-user/new-user.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserPageComponent} from './components/user-page/user-page.component';
import {MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarModule} from '../header/nav-bar.module';
import {RouterModule} from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [NewUserComponent, UserPageComponent, UserTableComponent, EditUserComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NavBarModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [NewUserComponent, UserTableComponent, UserPageComponent,EditUserComponent],
  providers: [UserService],
  entryComponents: [NewUserComponent]
})
export class UserModule {
}
