import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'user', canActivate: [UserAuthGuard], loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule), },
  { path: 'admin', canActivate: [AdminAuthGuard], loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule), },
  { path: '**', component: NotFoundComponent },
];

//If I want to redirect to a path from a button i need to use routerLink="path".
//The path i input is from the curret path.
//For example: 
//current path="localhost:4200/admin"-> 
//button has routerLink="./home"-> 
//the router path now is "localhost:4200/admin/home"

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
