import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  { path: "register", component: RegisterComponent }, 
  { path: "login", component: LoginComponent }, 
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut vers login
  { path: '**', redirectTo: 'home', pathMatch: 'full' },// Redirection pour tout autre chemin non défini

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
