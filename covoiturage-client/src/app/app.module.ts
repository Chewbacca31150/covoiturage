import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NG_ASYNC_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// material design imports

import { AppModuleMaterial } from './app.module-material';

import { appRoutes } from './appRoutes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './guard/auth.guard';
import { PathConditionsComponent } from './path-conditions/path-conditions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogOverviewComponent } from './dialog/dialog-overview.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    PathConditionsComponent,
    DashboardComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModuleMaterial,    
    HttpModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  providers: [AuthGuard, ApiService, AuthService, ConfigService, UserService, 
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
