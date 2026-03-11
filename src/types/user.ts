type UserHair = {
  color: string;
  type: string;
};

type Address = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: AddressCoordinates;
  country: string;
};
type AddressCoordinates = {
  lat: number;
  lng: number;
};

type UserBank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type UserCompany = {
  department: string;
  name: string;
  title: string;
  address: Address;
};

type UserCrypto = {
  coin: string;
  wallet: string;
  network: string;
};

type UserRole = "admin" | "moderator" | "user";

export type SingleUser = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
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
  hair: UserHair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: UserBank;
  company: UserCompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: UserCrypto;
  role: UserRole;
};

export type ApiResponse = {
  users: SingleUser[];
  limit: number;
  skip: number;
  total: number;
};
