import {faker} from "@faker-js/faker"
import {RandomHelper} from "../helpers/utils"


// export async function generateCustomerData() {
//   const timestamp = Date.now();
//   return {
//     phone_number:`07${timestamp}`.slice(0, 10),
//     full_name:faker.person.fullName(),
//     national_id:"ID" + RandomHelper.generateRandomNumber(1000, 9999),
//     date_of_birth:RandomHelper.getCurrentDate(),
//     loan_amount: 50000,
//     loan_term: 15,
//     purpose: 'Business expansion'
//   };
// }

export async function generateCustomerData() {
    const password = faker.internet.password()
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        phone_number: `07${RandomHelper.generateRandomNumber(100000000, 999999999)}`,
        password: password,
        confirm_password: password
    }


}