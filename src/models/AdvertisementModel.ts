export class AdvertisementModel {
	id: number;
	title: string;
	imgUrl: string;
	location: string;
	price: number;
	isPromoted: boolean;
	description: string;
	createdAt?: Date;
}