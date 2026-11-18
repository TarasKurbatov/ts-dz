import axios from 'axios';

const URL = 'https://dummyjson.com/users';

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

interface Hair { color: string; type: string; }

interface Coordinates { lat: number; lng: number; }

interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
}
interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
}
interface Crypto {
    coin: string;
    wallet: string;
    network: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: Gender;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: Role;
}

interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

async function fetchUsers(): Promise<void> {
    try {
        const response = await axios.get<UsersResponse>(URL);
        console.log(JSON.stringify(response.data.users[0], null, 2));
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.log('Axios error:', error.message);
        } else if (error instanceof Error) {
            console.log('Error:', error.message);
        } else {
            console.log('Unknown error:', error);
        }
    }
}

fetchUsers();