import { Organizer } from "./Organizer";

export interface Organization {
    organizers: Organizer[];
    calendar_id: string;
    about: string;
};