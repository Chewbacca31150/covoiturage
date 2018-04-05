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
    startLocation: { lat: number, lng: number, address: string };
    stopLocation: { lat: number, lng: number, address: string };
}
