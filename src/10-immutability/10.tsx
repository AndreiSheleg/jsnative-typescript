export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export function makeHairStyle(u: UserType, power: number) {
    const copyU = {...u, hair: u.hair / power}
    //copyU.hair = u.hair / power
    return copyU
}

export function moveUser(u: UserWithLaptopType, newCity: string) {
    const copyU = {...u, address: {...u.address, city: newCity}}

    return copyU
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, newHouse: number) {
return {...u, address: {...u.address, house: newHouse}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, newLaptop: string) {
   return {...u, laptop: {...u.laptop, title: newLaptop}}
}