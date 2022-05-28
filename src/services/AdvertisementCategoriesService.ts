import { CategoryModel } from './../models/CategoryModel';
class AdvertisementCategoriesService {
	getAdvertisementCategories(): Promise<CategoryModel[]> {
		// TODO actual HTTP request
		return new Promise(resolve => resolve([
			{ id: 1, name: 'Gry', iconName: 'fa fa-gamepad' },
			{ id: 2, name: 'Komputery', iconName: 'fa fa-desktop' },
			{ id: 3, name: 'Laptopy', iconName: 'fa fa-laptop' },
			{ id: 4, name: 'Monitory i TV', iconName: 'fa fa-television' },
			{ id: 5, name: 'Karty graficzne', iconName: 'fa fa-microchip' },
			{ id: 6, name: 'Klawiatury', iconName: 'fa fa-keyboard-o' },
			{ id: 7, name: 'Myszki', iconName: 'fa fa-mouse-pointer' },
			{ id: 8, name: 'Kontrolery', iconName: 'fa fa-gamepad' },
			{ id: 9, name: 'Podzespoły do PC', iconName: 'fa fa-cogs' },
			{ id: 10, name: 'Słuchawki', iconName: 'fa fa-headphones' },
			{ id: 11, name: 'Fotele', iconName: 'fa fa-bolt' },
			{ id: 12, name: 'Akcesoria', iconName: 'fa fa-barcode' },
		]));
		// return Promise.resolve();
	}
}

export default new AdvertisementCategoriesService();