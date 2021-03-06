import {NgModule} from '@angular/core';
import {CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {AppModule} from '../../app.module';
import {UserModule} from '../user/user.module';
import {FormsModule} from '@angular/forms';
import {NavBarComponent} from './components/header/nav-bar.component';
import {NewTaskComponent} from '../task/components/new-task/new-task.component';
import {TaskModule} from '../task/task.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    NavBarComponent
  ],
})
export class NavBarModule {
}
