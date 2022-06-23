import { ImageModel } from './ImageModel';
import { CategoryModel } from './CategoryModel';

export class AdvertisementModel {
	id?: number;
	authorId?: number;
	title?: string;
	category?: CategoryModel;
	description?: string;
	localization?: string;
	email?: string;
	phoneNumber?: string;
	price?: number;
	isPromoted?: boolean;
	image?: ImageModel;
	createdAt?: Date;
}