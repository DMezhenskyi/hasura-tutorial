import { CreateUserGQL } from './../../../../generated/graphql';
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
import { auth } from 'firebase/app';
import 'firebase/auth';

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
    private db: AngularFireDatabase,
    private createUserGql: CreateUserGQL
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  createUser() {
    const { email, password, fullName } = this.registerForm.value;
    from(this.auth.createUserWithEmailAndPassword(email, password))
      .pipe(
        switchMap(({ user }) => this.metadataCreateWatcher(user)),
        take(1),
        switchMap((user) => from(user.getIdToken(true)).pipe(mapTo(user))),
        switchMap(({ uid: uuid }) =>
          this.createUserGql.mutate({ uuid, fullName })
        )
      )
      .subscribe(() => this.router.navigate(['']), console.error);
  }

  createUserViaGoogle() {
    from(this.auth.signInWithPopup(new auth.GoogleAuthProvider()))
      .pipe(
        switchMap(({ user }) => this.metadataCreateWatcher(user)),
        take(1),
        switchMap((user) => from(user.getIdToken(true)).pipe(mapTo(user))),
        switchMap(({ uid: uuid, displayName: fullName }) =>
          this.createUserGql.mutate({ uuid, fullName })
        )
      )
      .subscribe(() => this.router.navigate(['']), console.error);
  }

  private metadataCreateWatcher(user: firebase.User) {
    return this.db
      .object(`metadata/${user.uid}/refreshTime`)
      .valueChanges()
      .pipe(
        first((refreshTime) => !!refreshTime),
        mapTo(user)
      );
  }
}
