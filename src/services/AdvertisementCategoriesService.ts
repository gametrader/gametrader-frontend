import { CategoryModel } from './../models/CategoryModel';
class AdvertisementCategoriesService {
	getAdvertisementCategories(): Promise<CategoryModel[]> {
		// TODO actual HTTP request
		return new Promise(resolve => resolve([
			{ name: 'Gry', iconName: 'fa fa-gamepad' },
			{ name: 'Komputery', iconName: 'fa fa-desktop' },
			{ name: 'Laptopy', iconName: 'fa fa-laptop' },
			{ name: 'Monitory i TV', iconName: 'fa fa-television' },
			{ name: 'Karty graficzne', iconName: 'fa fa-microchip' },
			{ name: 'Klawiatury', iconName: 'fa fa-keyboard-o' },
			{ name: 'Myszki', iconName: 'fa fa-mouse-pointer' },
			{ name: 'Kontrolery', iconName: 'fa fa-gamepad' },
			{ name: 'Podzespoły do PC', iconName: 'fa fa-cogs' },
			{ name: 'Słuchawki', iconName: 'fa fa-headphones' },
			{ name: 'Fotele', iconName: 'fa fa-bolt' },
			{ name: 'Akcesoria', iconName: 'fa fa-barcode' },
		]));
		// return Promise.resolve();
	}
}

export default new AdvertisementCategoriesService();