import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NG_ASYNC_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

import { AppModuleMaterial } from './app.module-material';

import 'hammerjs'; // Laisse ca là, sinon l'animation du slider foire... Bisous ;* ... Bisous ???? :o

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
import { DialogOverviewComponent } from './dialog/dialog-overview.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { MyTrajetsComponent } from './my-trajets/my-trajets.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';


import { AddPathComponent } from './add-path/add-path.component';
import { PathInformationComponent } from './path-information/path-information.component';
import { PathResultsComponent } from './path-results/path-results.component';
import { MapAuthGuard } from './guard/map.auth.guard';
import { TrajetService } from './services/trajet.service';
import { PathInformationDetailsComponent } from './path-information-details/path-information-details.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import { PathInformationDistanceComponent } from './path-information-distance/path-information-distance.component';

// how to avoid api limit ? use a random api key :P
const apiKeys = ['AIzaSyCHKOinW6VoYCy8y4ogN0nAGXwX9DWhGP8',
  'AIzaSyBiw67fELpJMwyZXXN799Wkx8eb6oQJA2A', 'AIzaSyDi9cqC_wA23bDv4G8l5EgRAHSmPg7UfV4'];

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
    DialogOverviewComponent,
    AddPathComponent,
    PathInformationComponent,
    PathResultsComponent,
    PathInformationDetailsComponent,
    ContactComponent,
    MyMessagesComponent,
    MyTrajetsComponent,
    PathInformationDistanceComponent
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
    AgmCoreModule.forRoot({
      apiKey: apiKeys[Math.floor(Math.random() * apiKeys.length)],
      libraries: ['places']
    }),
    AgmDirectionModule
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  providers: [AuthGuard, MapAuthGuard, ApiService, AuthService, ConfigService, UserService, TrajetService, ContactService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
