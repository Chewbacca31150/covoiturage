export interface Trajet {
    driverId: number;
    passengersId: string;
    completed: boolean;
    pointDeparture: number;
    pointArrival: number;
    dateDeparture: Date;
    hourDeparture: string;
    directionResults: any;
    id: number;
    maxPlaces: number;
    regularDays: [string];
    pathBack: boolean;
}
