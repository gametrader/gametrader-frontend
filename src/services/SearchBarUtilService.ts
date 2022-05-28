import { AdvertisementSearchModel } from './AdvertisementService';
class SearchBarUtilService {
	static SEARCH_BAR_SETTINGS_KEY = 'SEARCH_BAR_SETTINGS';

	clearSearchBarSettings(): void {
		localStorage.removeItem(SearchBarUtilService.SEARCH_BAR_SETTINGS_KEY);
	}

	setSearchBarSettings(settings: AdvertisementSearchModel): void {
		localStorage.setItem(SearchBarUtilService.SEARCH_BAR_SETTINGS_KEY, JSON.stringify(settings));
	}

	getSearchBarSettings(): AdvertisementSearchModel {
		return JSON.parse(localStorage.getItem(SearchBarUtilService.SEARCH_BAR_SETTINGS_KEY));
	} 
}

export default new SearchBarUtilService();