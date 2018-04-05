export interface Trajet {
    driver_id: string;
    passengers_id: string;
    number_passenger: number;
    is_completed: boolean;
    point_departure: number;
    point_arrival: number;
    date_departure: Date;
}
