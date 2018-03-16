import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './guard/auth.guard';
import { PathConditionsComponent } from './path-conditions/path-conditions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPathComponent } from './add-path/add-path.component';
import { PathInformationComponent } from "./path-information/path-information.component";
import { PathResultsComponent } from "./path-results/path-results.component";

export const appRoutes: Routes = [
    { path: '', component: AccueilComponent},
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
    { path: 'path-conditions', component: PathConditionsComponent, canActivate: [AuthGuard] },
    { path: 'path-information', component: PathInformationComponent },
    { path: 'path-results', component: PathResultsComponent },
    { path: 'add-path', component: AddPathComponent },
    
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/not-found' }
];
