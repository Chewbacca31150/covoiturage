import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './guard/auth.guard';
import { PathConditionsComponent } from './path-conditions/path-conditions.component';
import { AddPathComponent } from './add-path/add-path.component';
import { PathInformationComponent } from './path-information/path-information.component';
import { PathResultsComponent } from './path-results/path-results.component';
import { MapAuthGuard } from './guard/map.auth.guard';
import { PathInformationDetailsComponent } from './path-information-details/path-information-details.component';
import { ContactComponent } from './contact/contact.component';
import { MyTrajetsComponent } from './my-trajets/my-trajets.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';

export const appRoutes: Routes = [
    { path: '', component: AccueilComponent, canActivate: [MapAuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
    { path: 'path-conditions', component: PathConditionsComponent, canActivate: [AuthGuard] },
    { path: 'path-information', component: PathInformationComponent },
    { path: 'path-information-details/:id', component: PathInformationDetailsComponent },
    { path: 'path-results', component: PathResultsComponent },
    { path: 'add-path', component: AddPathComponent },
    { path: 'contact/:id', component: ContactComponent },
    { path: 'my-trajets', component: MyTrajetsComponent, canActivate: [AuthGuard] },
    // { path: 'my-messages', component: MyMessagesComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/not-found' }
];
