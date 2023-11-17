import {UserType} from "./10";

function increaseAge(u: UserType) {
    u.age = u.age + 1
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Andrei',
        age: 33,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(34)
})