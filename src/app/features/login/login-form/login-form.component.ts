import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { auth } from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['']));
  }

  onLoginWithGoogle() {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => this.router.navigate(['']));
  }
}
