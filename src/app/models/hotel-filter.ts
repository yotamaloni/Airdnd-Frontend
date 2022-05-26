export interface HotelFilter {
    location: {
        country: string
        city: string
    }
    date: {
        checkIn: Date
        checkOut: Date
    }
    guest: {
        adults: number
        children: number
        infant: number
        pet: number
    }
}
