import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-add-path',
    templateUrl: './add-path.component.html',
    styleUrls: ['./add-path.component.css']
})
export class AddPathComponent implements OnInit {

    pathRegular: String
    pathBack: Boolean
    regularPath: string

    toppings = new FormControl();
    toppingList = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    constructor() {
    }

    ngOnInit() {
    }

    setradio(e: string): void {
        this.regularPath = e;
    }

    isSelected(name: string): boolean {
        if (!this.regularPath) // if no radio button is selected, always return false so every nothing is shown  
        {
            return false;
        }
        return (this.regularPath === name); // if current radio button is selected, return true, else return false  
    }

}