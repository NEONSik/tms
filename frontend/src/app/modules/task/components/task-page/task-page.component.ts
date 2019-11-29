import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit{
  task: Task;


  constructor(private taskService: TaskService) {
  }
  ngOnInit() {
    // this.taskService.getTasks().subscribe((task: Task[]) => {
    //   this.task = task[0];
    // });
  }
}
