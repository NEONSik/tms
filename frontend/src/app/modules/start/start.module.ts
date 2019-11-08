import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './components/start-page/start-page.component';
import {AppModule} from '../../app.module';



@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class StartModule { }
