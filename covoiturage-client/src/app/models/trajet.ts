import { LocationGoogle } from './location.google';
import { RegularDays } from './regulardays';

export interface Trajet {
    driverId: number;
    passengersId: string;
    completed: boolean;
    dateDeparture: Date;
    hourDeparture: string;
    directionResults: any;
    id: number;
    maxPlaces: number;
    regularDays: RegularDays;
    pathBack: boolean;
    startLocation: LocationGoogle;
    stopLocation: LocationGoogle;
}
