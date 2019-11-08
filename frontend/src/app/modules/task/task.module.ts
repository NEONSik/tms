import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './components/task-page/task-page.component';
import {UserService} from '../../services/user.service';
import {TaskService} from '../../services/task.service';
import {AppModule} from '../../app.module';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [TaskPageComponent],
  imports: [
    CommonModule,
    AppModule,
    MatBottomSheet,
    MatBottomSheetRef
  ],
  providers: [TaskService]
})
export class TaskModule { }
