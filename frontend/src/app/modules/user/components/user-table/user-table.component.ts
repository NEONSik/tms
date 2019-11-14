import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../../../services/user.service';
import {Project} from '../../../project/model/project';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  public userTable: User[];
  public dataSource: MatTableDataSource<User>;
  public totalSize = 0;
  public displayedColumns: string[] = ['id', 'email', 'role'];


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getTableUser();
  }

  private getTableUser() {
    this.userService.getUserAll().subscribe((userTable: User[]) => {
      this.userTable = userTable;
      this.dataSource = new MatTableDataSource(this.userTable);
      this.totalSize = this.userTable.length;
    });
  }
}

