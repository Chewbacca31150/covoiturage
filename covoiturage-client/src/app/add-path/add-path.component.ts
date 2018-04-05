import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TrajetService} from '../services/trajet.service';
import {Trajet} from '../models/trajet';
import {AuthService} from '../services/auth.service';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-add-path',
  templateUrl: './add-path.component.html',
  styleUrls: ['./add-path.component.css']
})
export class AddPathComponent implements OnInit {

  pathRegular: string;
  pathBack: boolean;
  regularPath: string;
  form: FormGroup;
  toppings = new FormControl();
  toppingList = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  @ViewChild("startAddress")
  public startAddress: ElementRef;
  @ViewChild("stopAddress")
  public stopAddress: ElementRef;

  startLocation: { lat: number, lng: number, address: string } = {
    lat: null,
    lng: null,
    address: null
  };
  stopLocation: { lat: number, lng: number, address: string } = {
    lat: null,
    lng: null,
    address: null
  };

  constructor(private trajetService: TrajetService, private authService: AuthService, private formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      startAddress: [''],
      stopAddress: [''],
      numberPlaces: ['']
    });

    this.mapsAPILoader.load().then(() => {
      let startAddressAutocomplete = new google.maps.places.Autocomplete(this.startAddress.nativeElement, {
        types: ["address"]
      });

      startAddressAutocomplete.addListener("place_changed", () => {
        let place: google.maps.places.PlaceResult = startAddressAutocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.startLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        };
      });

      let stopAddressAutocomplete = new google.maps.places.Autocomplete(this.stopAddress.nativeElement, {
        types: ["address"]
      });
      stopAddressAutocomplete.addListener("place_changed", () => {
        let place: google.maps.places.PlaceResult = stopAddressAutocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.startLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        };
      });
    })
      .catch((error) => {
        console.error(error);
        debugger;
      });
  }

  setradio(e: string): void {
    this.regularPath = e;
  }

  isSelected(name: string): boolean {
    // if no radio button is selected, always return false so every nothing is shown
    if (!this.regularPath) {
      return false;
    }
    return (this.regularPath === name); // if current radio button is selected, return true, else return false
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = this.form.value;
    const trajet: Trajet = {
      date_departure: new Date(),
      driver_id: this.authService.currentUser.id.toString(),
      is_completed: false,
      passengers_id: '',
      point_arrival: form.stopAddress,
      point_departure: form.startAddress,
      number_passenger: form.numberPlaces,
      startLocation: this.startLocation,
      stopLocation: this.stopLocation
    };
    this.trajetService.saveTrajet(trajet).subscribe((a) => console.log(a));
  }
}
