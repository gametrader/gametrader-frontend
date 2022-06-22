import { CategoryModel } from './CategoryModel';

export class AdvertisementModel {
	id?: number;
	authorId?: number;
	title?: string;
	category?: CategoryModel;
	description?: string;
	localization?: string;
	emailNumber?: string;
	phoneNumber?: string;
	price?: number;
	isPromoted?: boolean;
	imgUrl?: string;
	createdAt?: Date;
}