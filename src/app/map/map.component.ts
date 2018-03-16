///<reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {Http} from "@angular/http";

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('agmMaps') agmMaps;

  public workPosition: { lat: number; lng: number };
  public userPosition: { lat: number; lng: number };
  private googleMap: any = null;
  private driverMarker: any = null;
  public zoom: number = 15;
  public markers: { lat: number; lng: number, title: string }[] = [];
  public apiKey = "AIzaSyDi9cqC_wA23bDv4G8l5EgRAHSmPg7UfV4";

  // lat: number = 43.574681;
  // lng: number = 1.380402;
  dir = undefined;

  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
  }

  constructor(private HTTP: Http) {
    this.workPosition = {lat: 43.574681, lng: 1.380402};
    this.userPosition = {lat: 43.624866, lng: 1.432042};
    this.driverMarker = null;

    this.markers.push({
      lat: 43.574681,
      lng: 1.380402,
      title: "EDF"
    });
    this.markers.push({
      lat: 43.624866,
      lng: 1.432042,
      title: "user"
    });

    // (<any>window).initMap = this.initMap;
  }


  ngAfterViewInit(): void {
    this.agmMaps.mapReady.subscribe(map=>{
      debugger;
      let a = new map.DirectionsService;

      a.route({
        origin: new map.LatLng(this.userPosition.lat, this.userPosition.lng),
        destination: new map.LatLng(this.workPosition.lat, this.workPosition.lng),
        travelMode: map.TravelMode.DRIVING,
        optimizeWaypoints: true,
        unitSystem: map.UnitSystem.METRIC,
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: map.TrafficModel.PESSIMISTIC
        },
      }, (response, status) => {
        debugger;
        if (status == map.DirectionsStatus.OK) {
          debugger;
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    })
      // .then(map => {
      //   debugger;
      // })
      // .catch(err => {
      //   debugger;
      // })

    // setTimeout(()=>{


    // },500);
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {

      this.userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (this.googleMap !== null)
        this.googleMap.setCenter(this.userPosition);
      if (this.driverMarker !== null)
        this.driverMarker.setPosition(this.userPosition);

    }, (positionError) => {
      switch (positionError.code) {
        case 1: //PERMISSION_DENIED
          break;
        case 2: //POSITION_UNAVAILABLE
        case 3: //TIMEOUT
        default:
          alert("Impossible de vous localiser : " + positionError.message);
          break;
      }
    });


    //calculate user to work path

    // debugger;


    // let get = this.HTTP.get("https://maps.googleapis.com/maps/api/directions/json?origin="+MapComponent.latLngToString(this.userPosition)+"&destination="+MapComponent.latLngToString(this.workPosition)+"&key="+this.apiKey);
    // get.subscribe((response) => {
    //   debugger;
    // });
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

  private static latLngToString(position: { lat: number; lng: number }) {
    return position.lat + "," + position.lng
  }
}
