import React, { FunctionComponent } from 'react';
import styles from './Category.module.scss';
import { CategoryModel } from '../../models/CategoryModel';
import { useNavigate } from 'react-router-dom';
import searchBarUtilService from '../../services/SearchBarUtilService';
import { AdvertisementSearchModel } from '../../services/AdvertisementService';

const Category: FunctionComponent<{category: CategoryModel}> = ({category}) => {
	const navigate = useNavigate();

	const goToCategory = () => {
		const query = new AdvertisementSearchModel();
		query.category = category;
		query.location = null;
		searchBarUtilService.setSearchBarSettings(query);
		navigate('search-result');
	};

	return (
		<div className={styles.category} onClick={ () => goToCategory() }>
			<i className={category.iconName} style={{fontSize: '5em'}}/>
			<div>{category.name}</div>
		</div>
	);
};

export default Category;