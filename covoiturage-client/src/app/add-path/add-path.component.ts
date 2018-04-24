import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { AuthService } from '../services/auth.service';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { LocationGoogle } from '../models/location.google';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { RegularDays } from '../models/regulardays';

@Component({
    selector: 'app-add-path',
    templateUrl: './add-path.component.html',
    styleUrls: ['./add-path.component.css']
})
export class AddPathComponent implements OnInit {

    hourList = ['6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30'];
    pathRegular: string;
    pathBack: boolean;
    regularPath: string;
    form: FormGroup;
    posStart: boolean = false;
    posEnd: boolean = false;
    toppingList = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    @ViewChild('startAddress')
    public startAddress: ElementRef;
    @ViewChild('stopAddress')
    public stopAddress: ElementRef;

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
    actualLocation: LocationGoogle = {
        lat: null,
        lng: null,
        address: "Position Perso"
    };

    constructor(private trajetService: TrajetService, private authService: AuthService,
        private formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader, private route: Router, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            startAddress: [''],
            stopAddress: [''],
            numberPlaces: [''],
            pathDepartureDate: [''],
            pathDepartureHour: [''],
            pathRegularDays: [''],
            pathBackFormControl: [''],
            posStart: false,
            posEnd: false
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
        this.getLocation();
    }

    /////////////////////////////////////////////////////////////////////

    getLocation() : void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    showPosition(position) : void {
        this.actualLocation.lat = position.coords.latitude
        this.actualLocation.lng = position.coords.longitude
    }

    /////////////////////////////////////////////////////////////////////

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
        if ((this.form.value.startAddress === '' && !this.form.value.posStart) || (this.form.value.stopAddress === '' && !this.form.value.posEnd) ||
            this.form.value.numberPlaces === '' || (this.form.value.pathDepartureDate === ''
                && this.form.value.pathRegularDays === '')) {
            return;
        }
        event.preventDefault();
        if (this.regularPath === 'pathRegularTrue') {
            this.form.controls['pathDepartureDate'].setValue('');
        } else if (this.regularPath === 'pathRegularFalse') {
            this.form.controls['pathRegularDays'].setValue('');
        }

        const form = this.form.value;
        let pathRegularDays: String;
        if (form.pathRegularDays === '') {
            pathRegularDays = null;
        } else {
            const arry: String[] = form.pathRegularDays;
            pathRegularDays = arry.join(',');
        }
        if(this.form.value.posStart)
        {
            this.startLocation = this.actualLocation
        }
        if(this.form.value.posEnd)
        {
            this.stopLocation = this.actualLocation
        }
        
        const trajet: Trajet = {
            dateDeparture: form.pathDepartureDate,
            hourDeparture: form.pathDepartureHour,
            driverId: this.authService.currentUser.id,
            completed: false,
            passengersId: '',
            maxPlaces: form.numberPlaces,
            regularDays: pathRegularDays,
            pathBack: form.pathBackFormControl,
            id: 0,
            directionResults: '',
            startLocation: this.startLocation,
            stopLocation: this.stopLocation
        };
        this.trajetService.saveTrajet(trajet).subscribe((a) => console.log(a));
        this.snackBar.open('Trajet ajoute.', '', {
            duration: 3500,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
        this.route.navigate(['/map']);
    }
}
