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

export type CompanyType = {
    id: number, title: string
}
export type WithCompaniesType = {
    companies: CompanyType[]
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

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {...u, books: [...u.books, ...newBooks]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, updateBook: string) {
    return {...u, books: u.books.map(el => el === oldBook ? updateBook : el)}
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => (
    {...u, books: u.books.filter(el => el !== bookForDelete)}
)

export const addNewCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: { id: number, title: string }) => (
    {...u, companies: [...u.companies, newCompany]}
)

export const updateCompanyTitle = (u: WithCompaniesType, companuId: number, newTitle: string) => (
    {
        ...u, companies: u.companies.map(
            el => el.id === companuId ? {...el, title: newTitle} : el)
    }
)

export const updateCompanyTitleAssociative =
    (companies: { [key: string]: CompanyType[] },
     userName: string,
     companyId: number,
     newTitle: string) => (
        {
            ...companies, [userName]: companies[userName].map(el => el.id === companyId ?
                {...el, title: newTitle} : el)
        }
    )