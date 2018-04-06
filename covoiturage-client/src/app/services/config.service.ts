import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

    private _api_url = '/api';

    private _refresh_token_url = this._api_url + '/refresh';

    private _login_url = this._api_url + '/login';

    private _logout_url = this._api_url + '/logout';

    private _change_password_url = this._api_url + '/changePassword';

    private _whoami_url = this._api_url + '/whoami';

    private _user_url = this._api_url + '/user';

    private _users_url = this._user_url + '/all';

    private _reset_credentials_url = this._user_url + '/reset-credentials';

    private _signup_url = this._api_url + '/signup';

    private _delete_user_url = this._user_url + '/delete';

    private _all_number_url = this._api_url + '/all-users';

    private _save_user_url = this._api_url + '/user/save';

    private _trajet_url = this._api_url + '/trajet';

    private _trajet_one_url = this._trajet_url + '/one';

    private _trajet_search_url = this._trajet_url + '/find';

    private _contact_send_url = this._api_url + '/contact';

    private _contact_get_mine_url = this._contact_send_url;

    private _my_trajets_url = this._trajet_url + '/my-trajets';

    get contact_get_mine_url(): string {
        return this._contact_get_mine_url;
    }

    get my_trajets_url(): string {
        return this._my_trajets_url;
    }

    get contact_send_url(): string {
        return this._contact_send_url;
    }

    get trajet_search_url(): string {
        return this._trajet_search_url;
    }

    get trajet_one_url(): string {
        return this._trajet_one_url;
    }

    get save_user_url(): string {
        return this._save_user_url;
    }

    get trajet_url(): string {
        return this._trajet_url;
    }

    get all_number_url(): string {
        return this._all_number_url;
    }

    get delete_user_url(): string {
        return this._delete_user_url;
    }

    get user_url(): string {
        return this._user_url;
    }

    get reset_credentials_url(): string {
        return this._reset_credentials_url;
    }

    get refresh_token_url(): string {
        return this._refresh_token_url;
    }

    get whoami_url(): string {
        return this._whoami_url;
    }

    get users_url(): string {
        return this._users_url;
    }

    get login_url(): string {
        return this._login_url;
    }

    get logout_url(): string {
        return this._logout_url;
    }

    get change_password_url(): string {
        return this._change_password_url;
    }

    get signup_url(): string {
        return this._signup_url;
    }

}
