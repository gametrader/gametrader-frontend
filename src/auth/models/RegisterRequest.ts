export class RegisterRequest {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    dateOfBirth: Date;
    gender: 'M' | 'F' | 'O';
}