import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../model/user';
import {Project} from '../../../project/model/project';
import {ActivatedRoute, Router} from '@angular/router';
import {NewUserComponent} from '../new-user/new-user.component';
import {EditTaskComponent} from '../../../task/components/edit-task/edit-task.component';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {MatDialog} from '@angular/material';
import {TransitEventsService} from '../../../../services/transit-events.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  checkRoleFromToken: string;
  strings: string[];
  roleFromToken: string;
  userPage: User = new User();
  userId: number;

  constructor(private transitEventsService: TransitEventsService, private dialog: MatDialog, private router: Router, private activateRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe((data: User) => {
      this.userPage = data;
    });
    this.transitEventsService.myMethod$.subscribe((event) => {
      this.userService.getUserById(this.userId).subscribe((dataChange: User) => {
        this.userPage = dataChange;
      });
    });
    this.checkRoleFromToken = localStorage.getItem('token');
    this.strings = this.checkRoleFromToken.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.roleFromToken = payload.scopes;
  }

  updateUser() {
    this.dialog.open(EditUserComponent);
  }

  homePage(): void {
    this.router.navigate(['home']);
  }
}

