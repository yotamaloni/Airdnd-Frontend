import { Reservation } from "./reservation"
import { User } from "./user"

export interface Hotel {
    _id: String
    name: String
    country: String,
    city: String
    host: User
    pos: {
        lat: Number,
        lan: Number
    }
    priceUsDollar: Number
    rank: Number | String
    placeType: String
    propertyType: String
    reservations: Reservation[]
    saleDates: {
        checkIn: Date
        checkOut: Date
    }
    labels: String[]
    facilities: {
        bathroom: Number
        bedroom: Number
        beds: Number
    }
    amenities: String[]
    languages: String[]
    summary: String
    licenseNumber: String
    about: {
        general: String
        theSpace: String
        otherThingToNote: String
    }
    images: String[]
}

