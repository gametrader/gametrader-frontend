import React, { useEffect, useState } from 'react';
import { CategoryModel } from '../../models/CategoryModel';
import styles from './SearchBar.module.scss';
import advertisementCategoriesService from '../../services/AdvertisementCategoriesService';

const SearchBar = () => {

	const [categories, setCategories] = useState<CategoryModel[]>([]);

	const getAllCategoriesList = () => {
		advertisementCategoriesService.getAdvertisementCategories().then((response) => {
			setCategories(response);
		});
	};

	useEffect(() => {
		getAllCategoriesList();
	}, []);

	return (
		<div className={styles.searchBar}>
			<div className='input-group input-group-lg'>
				<input type='text' className='form-control' placeholder='Wyszukaj...' aria-label='Username' aria-describedby='basic-addon1' />
				<select className={'form-select ' + styles.locationDropdown} id='inputGroupSelect04' aria-label='Example select with button addon'>
					<option selected>Wybierz lokalizację</option>
					<option value='1'>One</option>
					<option value='2'>Two</option>
					<option value='3'>Three</option>
				</select>
				<button className={'btn btn-outline-secondary ' + styles.searchButton} type='button'>
					<i style={{color: 'white', marginRight: '0.5rem'}} className={'fa fa-search'}/>
						Szukaj
				</button>
			</div>
			<div className="input-group mb-3 input-group-lg">
				<select className="form-select" id="inputGroupSelect02">
					<option selected>Wybierz kategorię</option>
					{ categories.map((category, id) => (
						<option key={id} value={category.name}>{category.name}</option>
					))}
				</select>
				<label className="input-group-text" htmlFor="inputGroupSelect02">Min. cena</label>
				<input type='text' className={'form-control ' + styles.priceInput} aria-label='Username' aria-describedby='basic-addon1' />
				<label className="input-group-text" htmlFor="inputGroupSelect02">Maks. cena</label>
				<input type='text' className={'form-control ' + styles.priceInput} aria-label='Username' aria-describedby='basic-addon1' />
			</div>
		</div>
	);
};

export default SearchBar;