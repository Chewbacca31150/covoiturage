import { Authority } from './authority';

export interface User {
    authorities: Authority[];
    email: string;
    id: number;
    username: string;
    isSmoke: boolean;
    isTalk: boolean;
    isMusic: boolean;
}
