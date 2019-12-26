import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {MatDialogRef, MatSnackBar, MatTable} from '@angular/material';
import {UserService} from '../../../../services/user.service';
import {Project} from '../../../project/model/project';
import {TransitEventsService} from '../../../../services/transit-events.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  newUser: User = new User();

  constructor(private userSnackBar: MatSnackBar, private transitEventsService: TransitEventsService, public diologRef: MatDialogRef<NewUserComponent>, private userservice: UserService, private formBulder: FormBuilder) {
  }

  hide = true;

  ngOnInit() {
    this.newUserForm = this.formBulder.group({
      email: ['', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required]],
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      password: ['', [Validators.required, this.noWhitespaceValidator, Validators.minLength(5)]],
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
      this.transitEventsService.myMethod(true);
      this.diologRef.close();
      this.openSnackBar('User created successfully', 'Close');
    }, error => {
      this.openSnackBar('Error! Status:' + error.status, 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this.userSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}
