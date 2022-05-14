import React, { FunctionComponent } from 'react';
import styles from './Category.module.scss';
import { CategoryModel } from '../../models/CategoryModel';

const Category: FunctionComponent<CategoryModel> = (category) => {
	return (
		<div className={styles.category}>
			<i className={category.iconName} style={{fontSize: '5em'}}/>
			<div>{category.name}</div>
		</div>
	);
};

export default Category;