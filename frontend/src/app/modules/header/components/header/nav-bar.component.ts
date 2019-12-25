import {Component, OnInit} from '@angular/core';
import {NewTaskComponent} from '../../../task/components/new-task/new-task.component';
import {MatDialog} from '@angular/material';
import {NewUserComponent} from '../../../user/components/new-user/new-user.component';
import {NewProjectComponent} from '../../../project/components/new-project/new-project.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  token: string;
  strings: string[];
  roleInToken: string;
  nameUserInSystem: string;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  newTask() {
    this.dialog.open(NewTaskComponent);
  }

  newUser() {
    this.dialog.open(NewUserComponent);
  }

  newProject() {
    this.dialog.open(NewProjectComponent);
  }

  public logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.strings = this.token.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.roleInToken = payload.scopes;
    this.nameUserInSystem = payload.sub;
  }
}
