import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './settings/settings.component';
import { ExpenseDetailsComponent } from './home/expenses/expense-details/expense-details.component';
import { NgbdModalContent } from './settings/confirmation-modal/confirmation-modal.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'settings', component:SettingsComponent},
  {path:'add', component: ExpenseDetailsComponent},
  {path:'popup', component: NgbdModalContent},
  {path:'edit/:id', component:ExpenseDetailsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'error', component:ErrorComponent},
  {path:'**', redirectTo:'error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
