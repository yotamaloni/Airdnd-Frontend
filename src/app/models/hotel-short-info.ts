export interface HotelShortInfo {
    header: string
    mainFirst: string
    mainSecond?: {
        checkIntDate: Date
        checkOutDate: Date
    }
    price: number
}
