import React, { FunctionComponent } from 'react';
import example from '../../../assets/sample.jpg';
import styles from './AdvertisementSearch.module.scss';

import { AdvertisementModel } from '../../../models/AdvertisementModel';

const AdvertisementSearch: FunctionComponent<{ advertisement: AdvertisementModel }> = ({ advertisement }) => {
	return (
		<div className={styles.advertisement} style={{background: advertisement.isPromoted ? '#FB8122' : '#403E58'}}>
			<div className={styles.advertisementText}>
				<h1>{advertisement.title}</h1>
				<p>{advertisement.description}</p>
			</div>
			<div className={styles.advertisementDetails}>
				<h1>{advertisement.price} zł</h1>
				<div>{advertisement.localization}</div>
				<div className={styles.userInfo}>
					<div>
						nazwa uzytkownika
					</div>
					<img src={example} alt='Preview image'/>
				</div>
			</div>
			<img className={styles.advertisementImage} src={example} alt='Preview image'/>
		</div>
	);
};

export default AdvertisementSearch;