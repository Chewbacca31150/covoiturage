import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    copyrightYear: string;
    imagePathFacebookIcon: string;
    imagePathTwitterIcon: string;
    constructor() {

    }

    ngOnInit() {
        this.copyrightYear = new Date().getFullYear().toString();
        this.imagePathFacebookIcon = './assets/images/footer/1000px-F_icon_black.png';
        this.imagePathTwitterIcon = './assets/images/footer/1024px-T_icon_black.png';
    }

}
