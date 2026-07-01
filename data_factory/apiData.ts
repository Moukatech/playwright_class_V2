import {faker} from "@faker-js/faker"


export async function generateApiData() {
    const password = faker.internet.password()
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        phone_number: `07${faker.number.int({min:100000000, max:999999999})}`,
        password: password,
        confirm_password: password
    }
}