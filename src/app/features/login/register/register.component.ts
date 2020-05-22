import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { switchMap, first, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  createUser() {
    const { email, password } = this.registerForm.value;
    from(this.auth.createUserWithEmailAndPassword(email, password))
      .pipe(
        switchMap(({ user }) =>
          this.db
            .object(`metadata/${user.uid}/refreshTime`)
            .valueChanges()
            .pipe(
              first((refreshTime) => !!refreshTime),
              mapTo(user)
            )
        ),
        take(1),
        switchMap((user) => user.getIdToken(true))
      )
      .subscribe(() => this.router.navigate(['']), console.error);
  }
}
