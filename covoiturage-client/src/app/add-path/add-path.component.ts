import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { AuthService } from '../services/auth.service';

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

    constructor(private trajetService: TrajetService, private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            startAddress: [''],
            stopAddress: [''],
            numberPlaces: ['']
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
            number_passenger: form.numberPlaces
        };
        this.trajetService.saveTrajet(trajet).subscribe((a) => console.log(a));
    }
}
