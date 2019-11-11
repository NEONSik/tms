import {Component, OnInit} from '@angular/core';
import {NewTaskComponent} from '../../../task/components/new-task/new-task.component';
import {MatDialog} from '@angular/material';
import {NewUserComponent} from '../../../user/components/new-user/new-user.component';
import {NewProjectComponent} from '../../../project/components/new-project/new-project.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  newTask() {
    const dialogRef = this.dialog.open(NewTaskComponent);
  }

  newUser() {
    const dialogRef = this.dialog.open(NewUserComponent);
  }

  newProject() {
    const diologRef = this.dialog.open(NewProjectComponent);
  }

  ngOnInit() {
  }

}
