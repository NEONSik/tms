import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from '../../services/user.service';
import {TaskService} from '../../services/task.service';
import {ProjectService} from '../../services/project.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProjectService]
})
export class ProjectModule { }
