import { CategoryModel } from './../models/CategoryModel';
const STORED_CATEGORIES_KEY = 'categories';

class AdvertisementCategoriesService {
	getAdvertisementCategories(): Promise<CategoryModel[]> {
		if (localStorage.getItem(STORED_CATEGORIES_KEY) === null) {
			const request = fetch(`${process.env.REACT_APP_API_URL}/post/v1/post/category/get/all`, {
				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then((response) => response.json());
			request.then((data) => localStorage.setItem(STORED_CATEGORIES_KEY, JSON.stringify(data)));
			return request;
		} else {
			return new Promise(resolve => resolve(JSON.parse(localStorage.getItem(STORED_CATEGORIES_KEY))));
		}
	}
}

export default new AdvertisementCategoriesService();