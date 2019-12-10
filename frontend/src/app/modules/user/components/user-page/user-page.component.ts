import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../model/user';
import {Project} from '../../../project/model/project';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  userPage: User = new User();
  userId: number;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe((data: User) => {
      this.userPage = data;
    });
  }

  updateUser() {
    this.router.navigate(['edituser', this.userId]);
  }

  homePage(): void {
    this.router.navigate(['home']);
  }
}

