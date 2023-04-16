import { PersonalData } from "./profile-user-info";

export class ProfileEdit implements PersonalData {
    fullName: string = "";
    email: string = "";
    phoneNumber: string = "";
    address: string = "";
    newPassword?: string;
}