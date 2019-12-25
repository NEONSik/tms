import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../../../user/model/user';
import {UserService} from '../../../../services/user.service';
import {ProjectService} from '../../../../services/project.service';
import {TaskService} from '../../../../services/task.service';
import {Router} from '@angular/router';

/** @title Form field with error messages */
@Component({
  selector: 'app-start-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  token: string;
  strings: string[];
  roleInToken: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.strings = this.token.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.roleInToken = payload.scopes;
  }
}
