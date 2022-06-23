import React, {useEffect, useState} from 'react';
import styles from './AdvertisementViewPage.module.scss';
import example from '../../assets/sample.jpg';

import {useParams} from 'react-router-dom';
import {AdvertisementModel} from '../../models/AdvertisementModel';
import advertisementService from '../../services/AdvertisementService';


const AdvertisementViewPage = () => {
	const params = useParams();

	const [advertisement, setAdvertisement] = useState<AdvertisementModel>(null);

	useEffect(() => {
		advertisementService.getAdvertisementById(parseInt(params.id, 10)).then((response) => setAdvertisement(response));
	}, []);

	return (
		<>
			<header>
				<div className={'gt-container'}>
					<h1 className={'gt-vt-font ' + styles.header}>{advertisement?.title}</h1>
				</div>
			</header>
			<div className={'gt-container '}>

				<ul className={styles.imageContainer}>
					<li className={'chevron'}>
						<i className={'fa fa-chevron-left'}/>
					</li>

					<li className={styles.image}>
						<img src={example} style={{height: '100%'}}/>
					</li>

					<li className={'chevron'}>
						<i className={'fa fa-chevron-right'}/>
					</li>
				</ul>


				<div className={'' + styles.infoContainer}>
					<div className={'' + styles.price}>
						{advertisement?.price}zł
					</div>
					<div className={'' + styles.description}>
						<h3>OPIS</h3>
						<p>
							{advertisement?.description}
						</p>
					</div>
				</div>


			</div>
		</>
	);
};


export default AdvertisementViewPage;