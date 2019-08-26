import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { UserAuthService } from "./auth.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { DataServiceService } from "./data-service.service";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";
import { GoogleChartsModule } from "angular-google-charts";
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [UserAuthService] },
  { path: "navbar", component: AppComponent, canActivate: [UserAuthService] },
  {
    path: "feedback",
    component: FeedbackFormComponent,
    canActivate: [UserAuthService]
  },
  {
    path: "reactiveform",
    pathMatch: "full",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideNavComponent,
    FeedbackFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    GoogleChartsModule.forRoot()
  ],
  providers: [DataServiceService, UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
