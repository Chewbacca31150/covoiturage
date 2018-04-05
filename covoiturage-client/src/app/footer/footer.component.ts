import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    copyrightYear: string;
    imagePathFacebookIcon: string;
    imagePathTwitterIcon: string;
    user: User;
    constructor(private _authService: AuthService) {

    }

    ngOnInit() {
        this._authService.getMyInfo().subscribe(user => {
            this.user = user;
        });

        this._authService.eventUser.subscribe((user: User) => {
            console.log(user);
            this.user = user;
        });
        this.copyrightYear = new Date().getFullYear().toString();
        this.imagePathFacebookIcon = './assets/images/footer/1000px-F_icon_black.png';
        this.imagePathTwitterIcon = './assets/images/footer/1024px-T_icon_black.png';
    }

}
