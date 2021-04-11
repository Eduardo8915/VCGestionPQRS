import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewPQRSComponent } from './pages/new-pqrs/new-pqrs.component';
import { ListPqrsComponent } from './pages/list-pqrs/list-pqrs.component'
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch:'full'
  },{
    path:'contact-us',
    component: ContactUsComponent
  },{
    path:'about-us',
    component: AboutUsComponent
  },{
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'NewPQRS',
    component: NewPQRSComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'ListPQRS',
    component: ListPqrsComponent,
    canActivate:[AuthGuard]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
