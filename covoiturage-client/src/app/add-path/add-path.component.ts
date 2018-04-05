import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { AuthService } from '../services/auth.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
@Component({
    selector: 'app-add-path',
    templateUrl: './add-path.component.html',
    styleUrls: ['./add-path.component.css']
})
export class AddPathComponent implements OnInit {

    hourList = ['6:00','6:30','7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30'];
    pathRegular: string;
    pathBack: boolean;
    regularPath: string;
    form: FormGroup;
    toppingList = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    @ViewChild('startAddress')
    public startAddress: ElementRef;
    @ViewChild('stopAddress')
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

    constructor(private trajetService: TrajetService, private authService: AuthService,
        private formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            startAddress: [''],
            stopAddress: [''],
            numberPlaces: ['']
        });

        this.mapsAPILoader.load().then(() => {
            const startAddressAutocomplete = new google.maps.places.Autocomplete(this.startAddress.nativeElement, {
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

            const stopAddressAutocomplete = new google.maps.places.Autocomplete(this.stopAddress.nativeElement, {
                types: ['address']
            });
            stopAddressAutocomplete.addListener('place_changed', () => {
                const place: google.maps.places.PlaceResult = stopAddressAutocomplete.getPlace();

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
        })
            .catch((error) => {
                console.error(error);
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
            dateDeparture: new Date(),
            driverId: this.authService.currentUser.id,
            completed: false,
            passengersId: '',
            pointArrival: form.stopAddress,
            pointDeparture: form.startAddress,
            maxPlaces: form.numberPlaces,
            directionResults: this.startLocation,
            id: 155
            // stopLocation: this.stopLocation
        };
        this.trajetService.saveTrajet(trajet).subscribe((a) => console.log(a));
    }
}
