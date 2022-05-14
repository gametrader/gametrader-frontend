import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { useNavigate } from 'react-router-dom';
import Advertisement from './../advertisement/Advertisement';
import { CategoryModel } from '../../models/CategoryModel';
import Category from '../category/Category';

const HomePage = () => {
	const navigate = useNavigate();

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

	const [categories, setCategories] = useState<CategoryModel[]>([]);
	const [categoriesStartIndex, setCategoriesStartIndex] = useState<number>(0);
	const [categoriesEndIndex, setCategoriesEndIndex] = useState<number>(6);

	const setCategoriesSlider = () => {
		setCategories(allCategories.slice(categoriesStartIndex, categoriesEndIndex));
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

	useEffect(() => {
		// Add initializing logic here
		setCategoriesSlider();
	}, []);

	return (
		<div className={'gt-container '}>
			<div className={styles.AdvertisementsSelectedForUser}>
				<h2>Wybrane dla Ciebie</h2>
				<ul className={' ' + styles.AdvertisementsSelectedContainer}>
					<li onClick={ () => navigate('/')}>
						<i className={'fa fa-chevron-left'}/>
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
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
							<Category name={category.name} iconName={category.iconName} />
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
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
					<li>
						<Advertisement />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
