import { Authority } from './authority';

export interface User {
    authorities: Authority[];
    email: string;
    id: number;
    username: string;
    isSmokeDriver: boolean;
    isTalkDriver: boolean;
    isMusicDriver: boolean;
    isSmokePassenger: boolean;
    isTalkPassenger: boolean;
    isMusicPassenger: boolean;
}
