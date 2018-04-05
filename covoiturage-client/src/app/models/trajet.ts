import { LocationGoogle } from './location.google';

export interface Trajet {
    driverId: number;
    passengersId: string;
    completed: boolean;
    dateDeparture: Date;
    hourDeparture: string;
    directionResults: any;
    id: number;
    maxPlaces: number;
    regularDays: [string];
    pathBack: boolean;
    startLocation: LocationGoogle;
    stopLocation: LocationGoogle;
}
