import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { CarouselModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { VerticalNavComponent } from '../vertical-nav/vertical-nav.component';
import { HeaderComponent } from "../header/header.component";
import { HttprequestComponent } from "../httprequest/httprequest.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { KeyframeanimationComponent } from "../keyframeanimation/keyframeanimation.component";
import { StaggeranimationComponent } from "../staggeranimation/staggeranimation.component";

import { PostService } from '../shared/post.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule, ReactiveFormsModule,
 BrowserAnimationsModule,  
  CarouselModule.forRoot(),
  RouterModule.forRoot([
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'vertical-nav', component: VerticalNavComponent }, 
  { path: 'httprequest', component: HttprequestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'keyframeanimation', component: KeyframeanimationComponent },
  { path: 'staggeranimation', component: StaggeranimationComponent },
   ] )
 ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent,
    AboutComponent, 
    ContactComponent, 
    FeedbackComponent, 
    HeaderComponent,
    VerticalNavComponent,
    HttprequestComponent,
    RegisterComponent,
    LoginComponent,
    KeyframeanimationComponent,
    StaggeranimationComponent],
  providers:[PostService],
  bootstrap:    [ AppComponent ]

})
export class AppModule { 



}
