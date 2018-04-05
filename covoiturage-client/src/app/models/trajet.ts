export interface Trajet {
    driverId: number;
    passengersId: string;
    completed: boolean;
    pointDeparture: number;
    pointArrival: number;
    dateDeparture: Date;
    directionResults: any;
    id: number;
    maxPlaces: number;
}
