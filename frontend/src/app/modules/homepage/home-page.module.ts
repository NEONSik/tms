import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/homePage/home-page.component';
import {AppModule} from '../../app.module';
import {MatTabsModule} from '@angular/material';
import {NavBarModule} from '../header/nav-bar.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    AppModule,
    NavBarModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
