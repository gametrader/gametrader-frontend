import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import Advertisement from './../advertisement/Advertisement';
import { CategoryModel } from '../../models/CategoryModel';
import Category from '../category/Category';
import {AdvertisementModel} from '../../models/AdvertisementModel';

const HomePage = () => {
	// TODO - download this list from backend, add redirects to pages
	const allCategories: CategoryModel[] = [
		{name: 'Gry', iconName: 'fa fa-gamepad'},
		{name: 'Komputery', iconName: 'fa fa-desktop'},
		{name: 'Laptopy', iconName: 'fa fa-laptop'},
		{name: 'Monitory i TV', iconName: 'fa fa-television'},
		{name: 'Karty graficzne', iconName: 'fa fa-microchip'},
		{name: 'Klawiatury', iconName: 'fa fa-keyboard-o'},
		{name: 'Myszki', iconName: 'fa fa-mouse-pointer'},
		{name: 'Kontrolery', iconName: 'fa fa-gamepad'},
		{name: 'Podzespoły do PC', iconName: 'fa fa-cogs'},
		{name: 'Słuchawki', iconName: 'fa fa-headphones'},
		{name: 'Fotele', iconName: 'fa fa-bolt'},
		{name: 'Akcesoria', iconName: 'fa fa-barcode'},
	];

	const allSelectedAdvertisements: AdvertisementModel[] = [
		{title: 'ogłoszenie 1', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 2', imgUrl: '', location:'Lublin', price:666, isPromoted:true},
		{title: 'ogłoszenie 3', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 4', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 5', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 6', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 7', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 8', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 9', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 10', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
	];

	const allAdvertisements: AdvertisementModel[] = [
		{title: 'ogłoszenie 1', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 2', imgUrl: '', location:'Lublin', price:666, isPromoted:true},
		{title: 'ogłoszenie 3', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 4', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 5', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 6', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 7', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 8', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 9', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 10', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 1', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 2', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 3', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 4', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 5', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 6', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 7', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 8', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 9', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
		{title: 'ogłoszenie 10', imgUrl: '', location:'Lublin', price:666, isPromoted:false},
	];

	const [categories, setCategories] = useState<CategoryModel[]>([]);
	const [categoriesStartIndex, setCategoriesStartIndex] = useState<number>(0);
	const [categoriesEndIndex, setCategoriesEndIndex] = useState<number>(6);

	//selected advertisements
	const [selectedAdvertisements, setSelectedAdvertisements] = useState<AdvertisementModel[]>([]);
	const [selectedAdvertisementsStartIndex, setSelectedAdvertisementsStartIndex] = useState<number>(0);
	const [selectedAdvertisementsEndIndex, setSelectedAdvertisementsEndIndex] = useState<number>(6);



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

	useEffect(() => {
		// Add initializing logic here
		setCategoriesSlider();
		setSelectedAdvertisementsSlider();
	}, []);


	return (
		<div className={'gt-container '}>
			<div className={styles.AdvertisementsSelectedForUser}>
				<h2>Wybrane dla Ciebie</h2>
				<ul className={' ' + styles.AdvertisementsSelectedContainer}>
					<li onClick={ () => moveSelectedAdvertisementsSlider('left')} className={styles.chevron}>
						<i className={'fa fa-chevron-left'}/>
					</li>
					{ selectedAdvertisements.map((advertisement, index) => (
						<li key={index}>
							<Advertisement advertisement={advertisement} />
						</li>
					))}
					<li onClick={ () => moveSelectedAdvertisementsSlider('right')} className={styles.chevron}>
						<i className={'fa fa-chevron-right'}/>
					</li>
				</ul>
			</div>

			<div className={styles.allCategories}>
				<h2>Wszystkie kategorie</h2>
				<ul className={styles.allCategoriesContainer}>
					<li onClick={ () => moveCategoriesSlider('left')} className={styles.chevron}>
						<i className={'fa fa-chevron-left'}/>
					</li>
					{ categories.map((category, index) => (
						<li key={index} style={{width: '100%'}}>
							<Category category={category}/>
						</li>
					))}
					<li onClick={ () => moveCategoriesSlider('right')} className={styles.chevron}>
						<i className={'fa fa-chevron-right'}/>
					</li>
				</ul>
			</div>

			<div className={styles.lastAddedAdvertisements}>
				<h2>Ostatnio dodane</h2>
				<ul className={' ' + styles.lastAdvertisementsContainer}>
					{ allAdvertisements.map((advertisement, index) => (
						<li key={index}>
							<Advertisement advertisement={advertisement} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
