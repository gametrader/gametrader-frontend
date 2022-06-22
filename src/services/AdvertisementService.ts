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
		return fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/get/all`, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
	}

	getRecentlyAddedAdvertisements(): Promise<AdvertisementModel[]> {
		return fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/get/all`, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
	}

	getAdvertisements(searchCriteria: AdvertisementSearchModel): Promise<AdvertisementModel[]> {
		console.log(searchCriteria);
		return fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/get/all`, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
	}

	addAdvertisement(advertisement: AdvertisementModel, file: File) {
		const formData = new FormData();
		formData.append('dto', JSON.stringify(advertisement));
		formData.append('files', file);
		return fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/create`, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				dto: advertisement,
				files: [file]
			})
		}).then((response) => response.json());
	}
}

export default new AdvertisementService();