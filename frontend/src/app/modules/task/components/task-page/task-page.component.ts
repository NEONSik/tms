import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Project} from '../../../project/model/project';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  taskId: number;
  taskPage: Task = new Task();

  constructor(private taskService: TaskService, private activateRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.taskId = this.activateRoute.snapshot.params['id'];
    this.taskService.getTask(this.taskId).subscribe((data: Task) => {
      this.taskPage = data;
    });
  }

  homePage(): void {
    this.router.navigate(['home']);
  }
  edit() {
    this.router.navigate(['edittask', this.taskId]);
  }
}
