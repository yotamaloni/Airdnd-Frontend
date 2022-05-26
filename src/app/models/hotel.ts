import { Reservation } from "./reservation"
import { User } from "./user"

export interface Hotel {
    _id: string
    name: string
    country: string,
    city: string
    host: User
    pos: {
        lat: number,
        lan: number
    }
    priceUsDollar: number
    rank: number | string
    placeType: string
    propertyType: string
    reservations: Reservation[]
    saleDates: {
        checkIn: Date
        checkOut: Date
    }
    labels: string[]
    facilities: {
        bathroom: number
        bedroom: number
        beds: number
    }
    amenities: string[]
    languages: string[]
    summary: string
    licensenumber: string
    about: {
        general: string
        theSpace: string
        otherThingToNote: string
    }
    images: string[]
}

