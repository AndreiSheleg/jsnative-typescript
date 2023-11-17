import {
    addNewBooksToUser, addNewCompany,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitleAssociative,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10";



test('reference type test', () => {
    let user: UserType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const cutUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(cutUser.hair).toBe(16)
    expect(cutUser.address).toBe(user.address)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const movedUser = moveUser(user, 'Vitebsk')

     expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Vitebsk')

})
test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const userWithMacbook = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithMacbook)
    expect(user.address).toBe(userWithMacbook.address)
    expect(user.laptop).not.toBe(userWithMacbook.laptop)
    expect(userWithMacbook.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ASUS')

})

test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css','html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 84)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(84)

})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css','html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest API'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest API')

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css','html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)

})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css','html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('add Google to companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        companies: [{id:1, title: 'Bel-Telecart'}, {id:2, title: 'SkyEnergo'}]
    }

    const userCopy = addNewCompany(user, {id: 3, title: 'Googlee'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].title).toBe('Googlee')

})

test('update Епам to EPAM', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Andrei',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        companies: [{id:1, title: 'Епам'}, {id:2, title: 'SkyEnergo'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')

})

test('update company', () => {

    let companies = {
        'Andrei': [{id:1, title: 'Bel-Telecart'}, {id:2, title: 'SkyEnergo'}],
        'Dimych': [{id:1, title: 'Epam'}, {id:2, title: 'IT-Incubator'}]
    }

    const copy = updateCompanyTitleAssociative(companies, 'Dimych', 1, 'EPAM')

    expect(copy['Andrei']).toBe(companies['Andrei'])
    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Dimych'][0].title).toBe('EPAM')

})