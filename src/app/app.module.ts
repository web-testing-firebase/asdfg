import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { TableComponent } from './table/table.component';
import { DelModalComponent } from './table/del-modal/del-modal.component';
import { FormComponent } from './table/form/form.component';
import { WelcomeService } from './welcome/welcome.service';
import { FormModalComponent } from './table/form-modal/form-modal.component';
import { ViewModalComponent } from './table/view-modal/view-modal.component';
import { EditModalComponent } from './table/edit-modal/edit-modal.component';

import { HeaderComponent } from './header/header.component';
import { TempalteComponent } from './template-driven/template.component';
import { RecordComponent } from './template-driven/Record/record.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateService } from './template-driven/template.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { AuthService } from './login/auth.service';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { FeatureComponent } from './feature/feature.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TableComponent,
    FormComponent,
    NopagefoundComponent,
    FormModalComponent,
    ViewModalComponent,
    EditModalComponent,
    DelModalComponent,
    HeaderComponent,
    TempalteComponent,
    RecordComponent,
    LoginComponent,
    DashboardComponent,
    FeatureComponent,
    DashboardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [WelcomeService, TemplateService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalComponent,
    ViewModalComponent,
    DelModalComponent
  ]

})
export class AppModule { }