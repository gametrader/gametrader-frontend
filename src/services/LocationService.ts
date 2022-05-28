import { LocationModel } from '../models/LocationModel';

class LocationService {
	getLocations(): Promise<LocationModel[]> {
		return new Promise(resolve => resolve([
			{ id: 1, name: 'Lubelskie'},
			{ id: 2, name: 'Podlaskie' },
		]));
	}
}

export default new LocationService();