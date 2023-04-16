import { Header } from "./profile-tracking";

export interface UserInfo {
    userId: number;
    userName: number;
    userPhotoUrl: string;
    personalData: PersonalData;
    paymentMethods: RegisterPayments[];
    recentOrders: Header[];
}

export interface PersonalData {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export interface RegisterPayments {
    accountId: number;
    bankProvider: string;
    finalNumbers: string;
}