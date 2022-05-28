import React, { useEffect, useState } from 'react';
import { CategoryModel } from '../../models/CategoryModel';
import styles from './SearchBar.module.scss';
import advertisementCategoriesService from '../../services/AdvertisementCategoriesService';
import locationService from '../../services/LocationService';
import { LocationModel } from '../../models/LocationModel';
import postService, { AdvertisementSearchModel } from '../../services/AdvertisementService';

const SearchBar = () => {

	const [categories, setCategories] = useState<CategoryModel[]>([]);
	const [locations, setLocations] = useState<LocationModel[]>([]);

	const [name, setName] = useState<string>('');
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(0);
	const [selectedCategory, setSelectedCategory] = useState<CategoryModel>(null);
	const [selectedLocation, setSelectedLocation] = useState<LocationModel>(null);

	const getAllCategoriesList = () => {
		advertisementCategoriesService.getAdvertisementCategories().then((response) => {
			setCategories(response);
		});
	};

	const getAllLocationsList = () => {
		locationService.getLocations().then((response) => {
			setLocations(response);
		});
	};

	const onSearch = () => {
		const query = new AdvertisementSearchModel();
		if (name && name.length > 0) {
			query.name = name;
		}
		if (minPrice && minPrice > 0) {
			query.minPrice = minPrice;
		}
		if (maxPrice && maxPrice > 0) {
			query.maxPrice = maxPrice;
		}
		if (selectedCategory) {
			query.category = selectedCategory;
		}
		if (selectedLocation) {
			query.location = selectedLocation;
		}
		postService.getAdvertisements(query);
	};

	useEffect(() => {
		getAllCategoriesList();
		getAllLocationsList();
	}, []);

	return (
		<div className={styles.searchBar}>
			<div className='input-group input-group-lg'>
				<input type='text' className='form-control' placeholder='Wyszukaj...' value={name} onChange={ (event) => setName(event.target.value) }/>
				<select className={'form-select ' + styles.locationDropdown}
					onChange={(event) => {
						setSelectedLocation(locations.find((location) => location.id === parseInt(event.target.value, 10)));
					}}>
					<option value={0}>Wybierz lokalizację</option>
					{ locations.map((location) => (
						<option key={location.id} value={location.id} >{location.name}</option>
					))}
				</select>
				<button className={'btn btn-outline-secondary ' + styles.searchButton} type='button' onClick={ () => onSearch()}>
					<i style={{color: 'white', marginRight: '0.5rem'}} className={'fa fa-search'}/>
						Szukaj
				</button>
			</div>
			<div className="input-group mb-3 input-group-lg">
				<select className="form-select" id="inputGroupSelect02" 
					onChange={ (event) => {
						setSelectedCategory(categories.find((category) => category.id === parseInt(event.target.value, 10)));
					}}>
					<option value={0}>Wybierz kategorię</option>
					{ categories.map((category) => (
						<option key={category.id} value={category.id}>{category.name}</option>
					))}
				</select>
				<label className="input-group-text">Min. cena</label>
				<input type='number' className={'form-control ' + styles.priceInput} 
					value={minPrice} onChange={ (event) => setMinPrice(parseInt(event.target.value, 10))} min={0} max={maxPrice ? maxPrice : 99999}/>
				<label className="input-group-text">Maks. cena</label>
				<input type='number' className={'form-control ' + styles.priceInput} 
					value={maxPrice} onChange={ (event) => setMaxPrice(parseInt(event.target.value, 10))} max={99999} min={minPrice ? minPrice : 0}/>
			</div>
		</div>
	);
};

export default SearchBar;