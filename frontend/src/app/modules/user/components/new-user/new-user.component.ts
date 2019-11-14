import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  newUser: User = new User();

  constructor(public diologRef: MatDialogRef<NewUserComponent>, private userservice: UserService, private formBulder: FormBuilder) {
  }

  ngOnInit() {
    this.newUserForm = this.formBulder.group({
      email: ['', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [Validators.minLength(5)]],
      role: ['', [Validators.required]]
    });
  }

  close() {
    this.diologRef.close();
  }

  send() {
    this.newUser.email = this.newUserForm.controls.email.value;
    this.newUser.password = this.newUserForm.controls.password.value;
    this.newUser.role = this.newUserForm.controls.role.value;
    this.userservice.createUser(this.newUser).subscribe(() => {
      this.diologRef.close();
    });
  }
}
