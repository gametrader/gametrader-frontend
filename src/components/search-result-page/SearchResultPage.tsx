import React, { useEffect, useState } from 'react';
import styles from './SearchResultPage.module.scss';
import SearchBar from '../search-bar/SearchBar';
import advertisementService from '../../services/AdvertisementService';
import searchBarUtilService from '../../services/SearchBarUtilService';
import { PaginationModel } from '../../models/PaginationModel';
import { AdvertisementModel } from '../../models/AdvertisementModel';
import AdvertisementSearch from './advertisement-search/AdvertisementSearch';

const SearchResultPage = () => {
	const [allAdvertisements, setAllAdvertisements] = useState<PaginationModel<AdvertisementModel>>(null);
	const [advertisements, setAdvertisements] = useState<AdvertisementModel[]>([]);
	const [pageIndex, setPageIndex] = useState(0);
	const [pages, setPages] = useState<unknown[]>([]);

	useEffect(() => {
		advertisementService.getAdvertisements(searchBarUtilService.getSearchBarSettings()).then((response) => {
			setAllAdvertisements(new PaginationModel(response, 5));
		});
	}, []);

	useEffect(() => {
		if (allAdvertisements !== null) {
			const pages = [];
			for (let i = 0; i < allAdvertisements.getPagesCount(); i++) {
				pages.push({});
			}
			setPages(pages);
			setAdvertisements(allAdvertisements.getItemsFromPage(pageIndex));
		}
	}, [allAdvertisements]);

	useEffect(() => {
		if (allAdvertisements !== null) {
			setAdvertisements(allAdvertisements.getItemsFromPage(pageIndex));
		}
	}, [pageIndex]);

	const moveAdvertisementsSlider = (direction: 'left' | 'right') => {
		switch (direction) {
		case 'left':
			if (pageIndex > 0) {
				setPageIndex(pageIndex - 1);
			}
			break;
		case 'right':
			if (pageIndex < pages.length - 1) {
				setPageIndex(pageIndex + 1);
			}
			break;
		default:
			break;
		}
	};


	return (
		<div>
			<SearchBar />
			<div className={'gt-container ' + styles.main}>
				<div id={styles.titleHeader}>
					<h1>Wyniki wyszukiwania</h1>
					<select>
						<option value="latest">Sortuj od najnowszych</option>
						<option value="price-desc">Sortuj od najdroższych</option>
						<option value="price-asc">Sortuj od najtanszych</option>
					</select>
				</div>
				<div id={styles.advertisementList}>
					{advertisements.map((advertisement) => (
						<AdvertisementSearch key={advertisement.id} advertisement={advertisement}/>
					))}
				</div>
				<div id={styles.paginationBar}>
					<div className={styles.paginationItem} id={styles.leftChevron} onClick={() => moveAdvertisementsSlider('left')}>
						<i className={'fa fa-chevron-left'}/>
					</div>
					{pages.map((_, id) => (
						<div key={id} className={styles.paginationItem} style={{background: id === pageIndex ? '#FB8122' : '#403E58'}}
							onClick={ () => setPageIndex(id)}>
							{id + 1}
						</div>
					))}
					<div className={styles.paginationItem} id={styles.rightChevron} onClick={() => moveAdvertisementsSlider('right')}>
						<i className={'fa fa-chevron-right'}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResultPage;