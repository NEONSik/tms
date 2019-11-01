import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Taskpage} from '../../model/task';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  task: Taskpage;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((task: Taskpage[]) => {
      this.task = task[0];
    });
  }

}
