import { User } from "./user"
export interface Reservation {
    _id: string
    checkIn: Date,
    checkOut: Date,
    guest: {
        user: any
        adults: number
        children: number
        infant: number
        pet: number
    }
}
