import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  // constructor(private taskService: TaskService) {
  // }
  //
  // ngOnInit() {
  //   this.taskService.getTaskAll().subscribe((task: Task[]) => {
  //     this.task = task[];
  //   });
  }

}
