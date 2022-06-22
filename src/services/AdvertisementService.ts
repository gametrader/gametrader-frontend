import {AdvertisementModel} from './../models/AdvertisementModel';
import {CategoryModel} from '../models/CategoryModel';
import {LocationModel} from '../models/LocationModel';

export class AdvertisementSearchModel {
	name?: string;
	location?: LocationModel;
	category?: CategoryModel;
	minPrice?: number;
	maxPrice?: number;
}

class AdvertisementService {
	getSelectedAdvertisements(): Promise<AdvertisementModel[]> {
		return new Promise(resolve => resolve([
			{
				id: 1,
				title: 'ogłoszenie 1',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 2,
				title: 'ogłoszenie 2',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: true,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 3,
				title: 'ogłoszenie 3',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 4,
				title: 'ogłoszenie 4',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 5,
				title: 'ogłoszenie 5',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 6,
				title: 'ogłoszenie 6',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 7,
				title: 'ogłoszenie 7',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 8,
				title: 'ogłoszenie 8',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 9,
				title: 'ogłoszenie 9',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 10,
				title: 'ogłoszenie 10',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
		]));
	}

	getRecentlyAddedAdvertisements(): Promise<AdvertisementModel[]> {
		return new Promise(resolve => resolve([
			{
				id: 1,
				title: 'ogłoszenie 1',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 2,
				title: 'ogłoszenie 2',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: true,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 3,
				title: 'ogłoszenie 3',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 4,
				title: 'ogłoszenie 4',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 5,
				title: 'ogłoszenie 5',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 6,
				title: 'ogłoszenie 6',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 7,
				title: 'ogłoszenie 7',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 8,
				title: 'ogłoszenie 8',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 9,
				title: 'ogłoszenie 9',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 10,
				title: 'ogłoszenie 10',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 11,
				title: 'ogłoszenie 1',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 12,
				title: 'ogłoszenie 2',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 13,
				title: 'ogłoszenie 3',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 14,
				title: 'ogłoszenie 4',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 1,
				title: 'ogłoszenie 5',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 51,
				title: 'ogłoszenie 6',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 16,
				title: 'ogłoszenie 7',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 17,
				title: 'ogłoszenie 8',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 18,
				title: 'ogłoszenie 9',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 19,
				title: 'ogłoszenie 10',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
		]));
	}

	getAdvertisements(searchCriteria: AdvertisementSearchModel): Promise<AdvertisementModel[]> {
		console.log(searchCriteria);
		return new Promise(resolve => resolve([
			{
				id: 1,
				title: 'ogłoszenie 1',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 2,
				title: 'ogłoszenie 2',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: true,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 3,
				title: 'ogłoszenie 3',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 4,
				title: 'ogłoszenie 4',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 5,
				title: 'ogłoszenie 5',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 6,
				title: 'ogłoszenie 6',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 7,
				title: 'ogłoszenie 7',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 8,
				title: 'ogłoszenie 8',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 9,
				title: 'ogłoszenie 9',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
			{
				id: 11,
				title: 'ogłoszenie 10',
				imgUrl: '',
				location: 'Lublin',
				price: 666,
				isPromoted: false,
				description: 'lorem lorem lorem lorem'
			},
		]));
	}
}

export default new AdvertisementService();