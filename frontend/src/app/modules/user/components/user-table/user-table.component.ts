import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  user: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: User[]) => this.user = data);
  }

}
