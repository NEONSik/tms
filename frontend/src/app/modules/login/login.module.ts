import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {
  MatButtonModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatRippleModule,
  MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSortModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarModule} from '../header/nav-bar.module';
import {TaskModule} from '../task/task.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    NavBarModule,
    TaskModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
