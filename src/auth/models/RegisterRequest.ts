import { Gender } from "./Gender";

export class RegisterRequest {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    dateOfBirth: Date;
    gender: Gender
}