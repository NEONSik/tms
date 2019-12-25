import {Component, OnInit} from '@angular/core';
import {Page} from '../../../../models/page';
import {Project} from '../../../project/model/project';
import {User} from '../../model/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {TransitEventsService} from '../../../../services/transit-events.service';
import {ParseToken} from '../../../../models/parse-token';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private userId: number;
  url: string;
  urlElements: string[];
  editUserForm: FormGroup;
  editUser: User = new User();

  constructor(private transitEventsService: TransitEventsService, private userSnackBar: MatSnackBar, public dialogRef: MatDialogRef<EditUserComponent>, private  userService: UserService, private formbuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
  }
  hide = true;
  ngOnInit() {
    this.editUserForm = this.formbuilder.group({
      email: ['', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required]],
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      password: ['', [Validators.required, this.noWhitespaceValidator, Validators.minLength(5)]],
      role: ['', [Validators.required]]
    });
    this.url = document.URL.toString();
    this.urlElements = this.url.split('/');
    this.userId = parseFloat(this.urlElements[4]);
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

  updateUser() {
    this.editUser.id = this.userId;
    this.editUser.email = this.editUserForm.controls.email.value;
    this.editUser.password = this.editUserForm.controls.password.value;
    this.editUser.name = this.editUserForm.controls.name.value;
    this.editUser.role = this.editUserForm.controls.role.value;
    this.userService.updateUser(this.editUser.id, this.editUser).subscribe(() => {
        this.dialogRef.close();
        this.transitEventsService.myMethod(true);
        this.openSnackBar('User information updated successfully! ', 'Close');
      }, error => {
        this.openSnackBar('Error! Error status: ' + error.status, 'Close');
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.userSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}
