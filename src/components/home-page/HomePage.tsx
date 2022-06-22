import React, {useEffect, useState} from 'react';
import styles from './HomePage.module.scss';
import Advertisement from './../advertisement/Advertisement';
import {CategoryModel} from '../../models/CategoryModel';
import Category from '../category/Category';
import {AdvertisementModel} from '../../models/AdvertisementModel';
import SearchBar from '../search-bar/SearchBar';
import advertisementCategoriesService from '../../services/AdvertisementCategoriesService';
import advertisementService from '../../services/AdvertisementService';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
	const [allCategories, setAllCategories] = useState<CategoryModel[]>([]);
	const [allSelectedAdvertisements, setAllSelectedAdvertisements] = useState<AdvertisementModel[]>([]);
	const [allRecentlyAddedAdvertisements, setAllRecentlyAddedAdvertisements] = useState<AdvertisementModel[]>([]);

	const [categories, setCategories] = useState<CategoryModel[]>([]);
	const [categoriesStartIndex, setCategoriesStartIndex] = useState<number>(0);
	const [categoriesEndIndex, setCategoriesEndIndex] = useState<number>(6);

	//selected advertisements
	const [selectedAdvertisements, setSelectedAdvertisements] = useState<AdvertisementModel[]>([]);
	const [selectedAdvertisementsStartIndex, setSelectedAdvertisementsStartIndex] = useState<number>(0);
	const [selectedAdvertisementsEndIndex, setSelectedAdvertisementsEndIndex] = useState<number>(6);

	const navigate = useNavigate();

	const setCategoriesSlider = () => {
		setCategories(allCategories.slice(categoriesStartIndex, categoriesEndIndex));
	};

	//selected advertisements
	const setSelectedAdvertisementsSlider = () => {
		setSelectedAdvertisements(allSelectedAdvertisements.slice(selectedAdvertisementsStartIndex, selectedAdvertisementsEndIndex));
	};

	const moveCategoriesSlider = (direction: 'left' | 'right') => {
		switch (direction) {
		case 'left':
			if (categoriesStartIndex !== 0) {
				setCategoriesStartIndex(categoriesStartIndex - 1);
				setCategoriesEndIndex(categoriesEndIndex - 1);
			}
			break;
		case 'right':
			if (categoriesEndIndex !== allCategories.length) {
				setCategoriesStartIndex(categoriesStartIndex + 1);
				setCategoriesEndIndex(categoriesEndIndex + 1);
			}
			break;
		}
		setCategoriesSlider();
	};

	const moveSelectedAdvertisementsSlider = (direction: 'left' | 'right') => {
		switch (direction) {
		case 'left':
			if (selectedAdvertisementsStartIndex !== 0) {
				setSelectedAdvertisementsStartIndex(selectedAdvertisementsStartIndex - 1);
				setSelectedAdvertisementsEndIndex(selectedAdvertisementsEndIndex - 1);
			}
			break;
		case 'right':
			if (selectedAdvertisementsEndIndex !== allSelectedAdvertisements.length) {
				setSelectedAdvertisementsStartIndex(selectedAdvertisementsStartIndex + 1);
				setSelectedAdvertisementsEndIndex(selectedAdvertisementsEndIndex + 1);
			}
			break;
		}
		setSelectedAdvertisementsSlider();
	};

	const getAllCategoriesList = () => {
		advertisementCategoriesService.getAdvertisementCategories().then((response) => {
			setAllCategories(response);
			setCategoriesSlider();
		});
	};

	const getAdvertisements = () => {
		advertisementService.getSelectedAdvertisements().then((reponse) => {
			setAllSelectedAdvertisements(reponse);
		});
		advertisementService.getRecentlyAddedAdvertisements().then((response) => {
			setAllRecentlyAddedAdvertisements(response);
		});
	};

	const routeToAdvertisementView = () => {
		const path = '/view-advertisement';
		navigate(path);
	};

	useEffect(() => {
		// Add initializing logic here
		getAllCategoriesList();
		getAdvertisements();
	}, []);

	useEffect(() => {
		setCategoriesSlider();
	}, [allCategories]);

	useEffect(() => {
		setSelectedAdvertisementsSlider();
	}, [allSelectedAdvertisements]);


	return (
		<>
			<SearchBar/>
			<div className={'gt-container '}>
				<div className={styles.AdvertisementsSelectedForUser}>
					<h2>Wybrane dla Ciebie</h2>
					<ul className={' ' + styles.AdvertisementsSelectedContainer}>
						<li onClick={() => moveSelectedAdvertisementsSlider('left')} className={styles.chevron}>
							<i className={'fa fa-chevron-left'}/>
						</li>
						{selectedAdvertisements.map((advertisement, index) => (
							<li key={index} onClick={routeToAdvertisementView}>
								<Advertisement advertisement={advertisement}/>
							</li>
						))}
						<li onClick={() => moveSelectedAdvertisementsSlider('right')} className={styles.chevron}>
							<i className={'fa fa-chevron-right'}/>
						</li>
					</ul>
				</div>

				<div className={styles.allCategories}>
					<h2>Wszystkie kategorie</h2>
					<ul className={styles.allCategoriesContainer}>
						<li onClick={() => moveCategoriesSlider('left')} className={styles.chevron}>
							<i className={'fa fa-chevron-left'}/>
						</li>
						{categories.map((category, index) => (
							<li key={index} style={{width: '100%'}}>
								<Category category={category}/>
							</li>
						))}
						<li onClick={() => moveCategoriesSlider('right')} className={styles.chevron}>
							<i className={'fa fa-chevron-right'}/>
						</li>
					</ul>
				</div>

				<div className={styles.lastAddedAdvertisements}>
					<h2>Ostatnio dodane</h2>
					<ul className={' ' + styles.lastAdvertisementsContainer}>
						{allRecentlyAddedAdvertisements.map((advertisement, index) => (
							<li key={index}>
								<Advertisement advertisement={advertisement}/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default HomePage;
