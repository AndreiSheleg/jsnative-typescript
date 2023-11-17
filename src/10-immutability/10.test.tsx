import {
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
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