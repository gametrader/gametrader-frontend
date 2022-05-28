import { AdvertisementModel } from './../models/AdvertisementModel';
import { CategoryModel } from '../models/CategoryModel';
import { LocationModel } from '../models/LocationModel';

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
			{title: 'ogłoszenie 1', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 2', imgUrl: '', location:'Lublin', price:666, isPromoted:true},
			{title: 'ogłoszenie 3', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 4', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 5', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 6', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 7', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 8', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 9', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 10', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		]));
	}

	getRecentlyAddedAdvertisements(): Promise<AdvertisementModel[]> {
		return new Promise(resolve => resolve([
			{title: 'ogłoszenie 1', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 2', imgUrl: '', location:'Lublin', price:666, isPromoted:true},
			{title: 'ogłoszenie 3', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 4', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 5', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 6', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 7', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 8', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 9', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 10', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 1', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 2', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 3', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 4', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 5', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 6', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 7', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 8', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 9', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
			{title: 'ogłoszenie 10', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		]));
	}

	getAdvertisements(searchCriteria: AdvertisementSearchModel): Promise<AdvertisementModel[]> {
		console.log(searchCriteria);
		return new Promise(resolve => resolve([]));
	}
}

export default new AdvertisementService();