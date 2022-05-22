import { Reservation } from "./reservation"

export interface Hotel {
    _id: String
    name: String
    country: String,
    city: String
    pos: {
        lat: Number,
        lng: Number
    }
    priceUsDollar: Number
    Rank: Number
    placeType: String,
    propertyType: String
    reservations: Reservation[]
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
}

