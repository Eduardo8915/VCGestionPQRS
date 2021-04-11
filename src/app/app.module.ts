import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';//Formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IconDetailsComponent } from './components/icon-details/icon-details.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NewPQRSComponent } from './pages/new-pqrs/new-pqrs.component';
import { ListPqrsComponent } from './pages/list-pqrs/list-pqrs.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    ContactComponent,
    ContactUsComponent,
    AboutComponent,
    AboutUsComponent,
    IconDetailsComponent,
    LoginComponent,
    DashboardComponent,
    NewPQRSComponent,
    ListPqrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
