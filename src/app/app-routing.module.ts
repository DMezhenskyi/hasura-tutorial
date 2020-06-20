import { RegisterComponent } from './features/login/register/register.component';
import { TodoListComponent } from './features/dashboard/todo-list/todo-list.component';
import { LoginFormComponent } from './features/login/login-form/login-form.component';
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = redirectLoggedInTo(['']);
const redirectToDashboardWithLogger = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>
  pipe(
    tap(() => console.info('it will be redirected')),
    redirectToDashboard
  );

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    ...canActivate(redirectToDashboardWithLogger),
  },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: TodoListComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
