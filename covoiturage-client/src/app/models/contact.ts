import { Trajet } from './trajet';

export interface Contact {
    message: string;
    receiverId: number;
    senderId: number;
    trajet: Trajet;
    dateSent: Date;
}
