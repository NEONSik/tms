import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(this.userId).subscribe(data => this.user = data);
  }

}
