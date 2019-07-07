import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './home/overview/overview.component';
import { SplitComponent } from './home/split/split.component';
import { ExpensesComponent } from './home/expenses/expenses.component';
import { ExpenseListComponent } from './home/expenses/expense-list/expense-list.component';
import { ExpenseItemComponent } from './home/expenses/expense-item/expense-item.component';
import { ExpenseDetailsComponent } from './home/expenses/expense-details/expense-details.component';
import { HeaderComponent } from './header/header.component';
import { NgbdModalContent, NgbdModalComponent } from './settings/confirmation-modal/confirmation-modal.component';
import { PieChartComponent } from './home/pie-chart/pie-chart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    SettingsComponent,
    OverviewComponent,
    SplitComponent,
    ExpensesComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseDetailsComponent,
    HeaderComponent,
    NgbdModalComponent,
    NgbdModalContent,
    PieChartComponent,
    ProfileComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    ChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
