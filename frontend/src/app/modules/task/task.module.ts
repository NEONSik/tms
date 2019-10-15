import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskDetailsComponent} from './components/task-details/task-details.component';
import {TaskService} from '../../services/task.service';


@NgModule({
  declarations: [TaskDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [TaskDetailsComponent],
  providers: [TaskService]
})
export class TaskModule {
}
