import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {MatDialogRef, MatTable} from '@angular/material';
import {UserService} from '../../../../services/user.service';
import {Project} from '../../../project/model/project';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  newUser: User = new User();
  @ViewChild(MatTable, {static: false}) table: MatTable<User>;

  constructor(public diologRef: MatDialogRef<NewUserComponent>, private userservice: UserService, private formBulder: FormBuilder) {
  }

  ngOnInit() {
    this.newUserForm = this.formBulder.group({
      email: ['', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      password: ['', [Validators.required, this.noWhitespaceValidator]],
      role: ['', [Validators.required]]
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

  close() {
    this.diologRef.close();
  }

  send() {
    this.newUser.email = this.newUserForm.controls.email.value;
    this.newUser.name = this.newUserForm.controls.name.value;
    this.newUser.password = this.newUserForm.controls.password.value;
    this.newUser.role = this.newUserForm.controls.role.value;
    this.userservice.createUser(this.newUser).subscribe(() => {
      this.diologRef.close();
      this.table.renderRows();
    });
  }
}
