import React from 'react';
import styles from './HomePage.module.scss';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className={'gt-container '}>
			<div className={styles.AdvertisementsSelectedForUser}>
				<h2>Wybrane dla Ciebie</h2>
				<ul className={' ' + styles.AdvertisementsSelectedContainer}>
					<li onClick={ () => navigate('/')}>

					</li>
				</ul>
			</div>

			<div className={styles.allCategories}>
				<h2>Wszystkie kategorie</h2>
				<ul className={' ' + styles.allCategoriesContainer}>
					<li onClick={ () => navigate('/')}>

					</li>
				</ul>
			</div>

			<div className={styles.lastAddedAdvertisements}>
				<h2>Ostatnio dodane</h2>
				<ul className={' ' + styles.lastAdvertisementsContainer}>
					<li onClick={ () => navigate('/')}>

					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
