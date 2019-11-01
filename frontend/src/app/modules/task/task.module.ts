import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './companents/task-page/task-page.component';
import {UserService} from '../../services/user.service';
import {TaskService} from '../../services/task.service';



@NgModule({
  declarations: [TaskPageComponent],
  imports: [
    CommonModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
