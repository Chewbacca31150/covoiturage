export interface Trajet {
    is_smoke: boolean;
    driver_id: string;
    passengers_id: string;
    is_talk: boolean;
    is_music: boolean;
    is_completed: boolean;
    point_departure: number;
    point_arrival: number;
    date_departure: Date;
}
