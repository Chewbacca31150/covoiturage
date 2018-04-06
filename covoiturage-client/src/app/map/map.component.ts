import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public workPosition: { lat: number; lng: number };
  public userPosition: { lat: number; lng: number };
  private googleMap: any = null;
  private driverMarker: any = null;
  public zoom : number = 15;
  trajets: Trajet[] = [];
  trajetsCtrl: FormControl;
  public markers: {lat:number; lng:number, title:string}[] = [];
  // lat: number = 43.574681;
  // lng: number = 1.380402;


  constructor(private route: Router, private trajetService: TrajetService) {
    this.workPosition = {lat:43.574681,lng:1.380402};
    this.userPosition = {lat:43.624866, lng:1.432042};
    this.driverMarker = null;

    this.markers.push({
      lat : 43.574681,
      lng:1.380402,
      title: "EDF"
    });
    this.markers.push({
      lat : 43.624866,
      lng:1.432042,
      title: "user"
    });

    // (<any>window).initMap = this.initMap;
  }
 
  ngOnInit() {
    this.trajetsCtrl = new FormControl();
    this.trajetService.getTrajets().subscribe((trajets) => {
      this.trajets = trajets;
    });
    navigator.geolocation.getCurrentPosition((position) => {

      this.userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if(this.googleMap !== null)
        this.googleMap.setCenter(this.userPosition);
      if(this.driverMarker !== null)
        this.driverMarker.setPosition(this.userPosition);

    }, (positionError) => {
      switch(positionError.code){
        case 1: //PERMISSION_DENIED
          break;
        case 2: //POSITION_UNAVAILABLE
        case 3: //TIMEOUT
        default:
          alert("Impossible de vous localiser : "+positionError.message);
          break;
      }
    });

  }
  goTo(id: number) {
    this.route.navigate(['/path-information-details', id]);
  }

  // initMap() {
  //   let googleMap = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 15,
  //     center: this.userPosition
  //   });
  //
  //   this.driverMarker = new google.maps.Marker({
  //     position: this.userPosition,
  //     map: googleMap
  //   });
  // }

}
