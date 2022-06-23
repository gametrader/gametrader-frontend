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

	getAdvertisementById(id: number): Promise<AdvertisementModel> {
		return fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/get/${id}`, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
	}

	async addAdvertisement(advertisement: AdvertisementModel, file: File): Promise<any> {
		const formData = new FormData();
		formData.append('files', file);
		const imageUploadResponse = await fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/storage/add`, {
			method: 'post',
			body: formData
		}).then((response) => response.json());
		advertisement.image = imageUploadResponse;
		advertisement.authorId = 1;
		return fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/create`, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(advertisement)
		}).then((response) => response.json());
	}
}

export default new AdvertisementService();