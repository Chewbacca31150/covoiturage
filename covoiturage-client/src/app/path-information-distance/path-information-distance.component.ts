import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LocationGoogle } from '../models/location.google';
import { MapsAPILoader } from '@agm/core';
import { Search } from '../models/search';
import { Trajet } from '../models/trajet';
import { TrajetService } from '../services/trajet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-path-information-distance',
  templateUrl: './path-information-distance.component.html',
  styleUrls: ['./path-information-distance.component.css']
})
export class PathInformationDistanceComponent implements AfterViewInit {

  @ViewChild('startAddressSearch')
  public startAddressSearch: ElementRef;
  @ViewChild('stopAddressSearch')
  public stopAddressSearch: ElementRef;


  startLocation: LocationGoogle = {
    lat: null,
    lng: null,
    address: null
  };
  stopLocation: LocationGoogle = {
    lat: null,
    lng: null,
    address: null
  };

  trajetsDist: Trajet[];

  constructor(private mapsAPILoader: MapsAPILoader, private trajetService: TrajetService, private route: Router) { }


  ngAfterViewInit() {
    this.mapsAPILoader.load().then(() => {
      const startAddressAutocomplete = new google.maps.places.Autocomplete(this.startAddressSearch.nativeElement, {
        types: ['address']
      });

      startAddressAutocomplete.addListener('place_changed', () => {
        const place: google.maps.places.PlaceResult = startAddressAutocomplete.getPlace();

        // verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.startLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        };
      });

      const stopAddressAutocomplete = new google.maps.places.Autocomplete(this.stopAddressSearch.nativeElement, {
        types: ['address']
      });
      stopAddressAutocomplete.addListener('place_changed', () => {
        const place: google.maps.places.PlaceResult = stopAddressAutocomplete.getPlace();

        // verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.stopLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        };
      });
    })
      .catch((error) => {
        console.error(error);
      });
  }

  search() {
    const search: Search = {
      end: this.stopLocation,
      start: this.startLocation
    };
    this.trajetService.findTrajetsDist(search).subscribe((trajets) => {
      this.trajetsDist = trajets;
    });
  }

  goTo(id: number) {
    this.route.navigate(['/path-information-details', id]);
  }

}
