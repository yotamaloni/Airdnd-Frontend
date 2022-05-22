import { User } from "./user"
export interface Reservation {
    _id: String
    checkIn: Date,
    checkOut: Date,
    guest: {
        user: User
        adults: Number
        children: Number
        infant: Number
        pet: Number
    }
}
