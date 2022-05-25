export interface HotelShortInfo {
    header: String
    mainFirst: String
    mainSecond?: {
        checkIntDate: Date
        checkOutDate: Date
    }
    price: Number
}
