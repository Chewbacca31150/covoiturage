import { Authority } from './authority';

export interface User {
    authorities: Authority[];
    email: string;
    id: number;
    username: string;
    smokeDriver: boolean;
    talkDriver: boolean;
    musicDriver: boolean;
    smokePassenger: boolean;
    talkPassenger: boolean;
    musicPassenger: boolean;
}
