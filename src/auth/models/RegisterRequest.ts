import { Gender } from './Gender';

export class RegisterRequest {
	username: string;
	password: string;
	matchingPassword: string;
	email: string;
	birthdate: Date;
	gender: Gender;
}