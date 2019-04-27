import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BedPageComponent } from './bed-page/bed-page.component';
import { WardrobesPageComponent } from './wardrobes-page/wardrobes-page.component';
import { SofasandLoungersPageComponent } from './sofasand-loungers-page/sofasand-loungers-page.component';
import { DecorsPageComponent } from './decors-page/decors-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

const routes: Routes = [
  //{ path: "", component: HomePageComponent},
  { path: "", component: LoginFormComponent },
  { path: "beds", component: BedPageComponent },
  { path: "wardrobes", component: WardrobesPageComponent },
  { path: "sofas", component: SofasandLoungersPageComponent },
  { path: "decor", component: DecorsPageComponent },
  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "login", component: RegisterComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    NavBarComponent,
    MainPageComponent,
    HomePageComponent,
    BedPageComponent,
    WardrobesPageComponent,
    SofasandLoungersPageComponent,
    DecorsPageComponent,
    FooterPageComponent,
    CheckoutComponent,
    LoginFormComponent,
    RegisterComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
