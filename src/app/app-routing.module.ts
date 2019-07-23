import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './table/form/form.component';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { TempalteComponent } from './template-driven/template.component';
import { RecordComponent } from './template-driven/Record/record.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { FeatureComponent } from './feature/feature.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'template', component: TempalteComponent },
  { path: 'record', component: RecordComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'table/:id', component: FormComponent },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
