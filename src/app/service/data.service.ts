import { Injectable } from '@angular/core';
import { HotelOption } from '../models/hotel-option';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hotelOptions: HotelOption[] = [
    {
      txt: "arctic",
      icon: 'ac_unit'
    },
    {
      txt: "lake",
      icon: 'water'
    },
    {
      txt: "shared homes",
      icon: 'people'
    },
    {
      txt: "bed & breakfast",
      icon: 'coffee'
    },
    {
      txt: "desert",
      icon: 'brightness_low'
    },
    {
      txt: "national park",
      icon: 'park'
    },
    {
      txt: "camping",
      icon: 'details'
    },
    {
      txt: "tiny homes",
      icon: 'house'
    },
    {
      txt: "beach",
      icon: 'beach_access'
    },
    {
      txt: "countryside",
      icon: 'ac_unit'
    },
    {
      txt: "surfing",
      icon: 'surfing'
    },
    {
      txt: "amazing views",
      icon: 'landscape'
    },
    {
      txt: "castles",
      icon: 'castle'
    },
    {
      txt: "golfing",
      icon: 'golf_course'
    },
    {
      txt: "ski",
      icon: 'downhill_skiing'
    },
    {
      txt: "boat",
      icon: 'directions_boat_filled'
    },
  ]

  hotels: Hotel[] = [
    {
      _id: 'sdf4esdfdssdfa',
      name: "Jhon's",
      country: "South Africa",
      city: "Johannesburg",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 99,
      rank: 5,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(),
          checkOut: new Date(),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 11, 4),
        checkOut: new Date(2022, 11, 11),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236160/Airdnd/spjqkh4mlqs3iosoih8a.jpg'
      ]
    },
    {
      _id: 'sdfsdf4esdf',
      name: "Karol's",
      country: "New YorK",
      city: "New York City",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 169,
      rank: 4.9,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(),
          checkOut: new Date(),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 4, 5),
        checkOut: new Date(2022, 4, 8),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236129/Airdnd/ckzwnwzdqyjsrwlndwvq.jpg'
      ]
    },
    {
      _id: 'sdsdsdff4esdf',
      name: "Kiki's",
      country: "Argentina",
      city: "Buenos Aires",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 259,
      rank: 4.76,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(),
          checkOut: new Date(),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 3, 11),
        checkOut: new Date(2022, 3, 15),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236140/Airdnd/kaoqioc1qjgnswyjkusb.jpg'
      ]
    },
    {
      _id: 'sdf4dsdesdf',
      name: "Josh Wonderful Garden",
      country: "Croatia",
      city: "Zagreb",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 150,
      rank: 4.85,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(2022, 7, 20),
          checkOut: new Date(2022, 7, 24),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 7, 20),
        checkOut: new Date(2022, 7, 24),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236147/Airdnd/uhfmmjmtog4uq6apyjwj.jpg'
      ]
    },
    {
      _id: 'sdf4dddesdf',
      name: "Jin's Place",
      country: "Great Britain",
      city: "London",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 369,
      rank: 4.89,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(2022, 7, 11),
          checkOut: new Date(2022, 7, 11),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 8, 11),
        checkOut: new Date(2022, 8, 14),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236170/Airdnd/lqcuptrkmrjnvwdp7lkx.jpg'
      ]
    },
    {
      _id: 'sdf4esdf',
      name: "David",
      country: "Brazil",
      city: "Brasilia",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 100,
      rank: 5,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(),
          checkOut: new Date(),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 11, 15),
        checkOut: new Date(2022, 11, 18),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236171/Airdnd/qwwt4c1wfnldwlhp645e.jpg'
      ]
    },
    {
      _id: 'sasdfasd4esdf',
      name: "The Ranch",
      country: "Texas",
      city: "Austin",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 269,
      rank: 4.85,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(),
          checkOut: new Date(),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 9, 24),
        checkOut: new Date(2022, 9, 30),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236174/Airdnd/jsl7ipwu43abrulezs7y.jpg'
      ]
    },
    {
      _id: 'sasdf4esdf',
      name: "Yotam's Place",
      country: "Israel",
      city: "Jerusalem",
      pos: {
        lat: 555,
        lan: 444,
      },
      priceUsDollar: 159,
      rank: 4.9,
      placeType: "entire place", //private room, shared room
      propertyType: "house", //apartment, hotel
      reservations: [
        {
          _id: '33rfsdfsd',
          checkIn: new Date(),
          checkOut: new Date(),
          guest: {
            user: {
              name: "david",
              _id: "df3dscsdc",
              country: "israel",
            },
            adults: 2,
            children: 1,
            infant: 0,
            pet: 0,
          },
        },
      ],
      saleDates: {
        checkIn: new Date(2022, 11, 27),
        checkOut: new Date(2022, 11, 30),
      },
      labels: [
        "design",
        "arctic",
        "shared homes",
        "national parks",
        "bed & breakfast",
        "desert",
        "camping",
        "tiny homes",
        "domes",
        "beach",
        "countryside",
        "caves",
        "surfing",
        "amazing views",
        "castles",
        "yurts",
      ],
      facilities: {
        bathroom: 2,
        bedroom: 2,
        beds: 3,
      },
      amenities: [
        "wifi",
        "washer",
        "air conditioning",
        "kitchen",
        "dryer",
        "Dedicated workspace",
        "Shared backyard- fully fenced",
        "luggage dropoff allowed",
        "free parking on premises",
        "shared patio or balcony",
      ],
      languages: ["english", "german", "french", "hebrew"],
      summary: "",
      licenseNumber: '00033344488',
      about: {
        general:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        theSpace:
          "Mystagoge Retreat is a unique traditional house, which can accommodate up to two people.A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience.A light breakfast basket with rusks, jam, honey, tea coffee, milk and butter.Amenities included are WI-FI, air-conditioning, in all areas of house, free parking, sun filled traditional yard with sunbeds, dining area and shared BBQ.",
        otherThingToNote: "dsfsdfsd",
      },
      images: [
        'https://res.cloudinary.com/dnft2vfvz/image/upload/v1653236161/Airdnd/wrr7mr61fyzogfopuebk.jpg'
      ]
    }
  ];

  constructor() { }

}
