import React, { FunctionComponent, useEffect, useState } from 'react';
import example from '../../../assets/sample.jpg';
import styles from './AdvertisementSearch.module.scss';

import { AdvertisementModel } from '../../../models/AdvertisementModel';
import { useNavigate } from 'react-router-dom';
import advertisementService from '../../../services/AdvertisementService';


const AdvertisementSearch: FunctionComponent<{ advertisement: AdvertisementModel }> = ({ advertisement }) => {

	const navigate = useNavigate();
	const [fileUrl, setFileUrl] = useState('');

	const routeToAdvertisementView = () => {
		const path = `/view-advertisement/${advertisement.id}`;
		navigate(path);
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		advertisementService.getAdvertisementImage((advertisement as any).image[0].fileName)
			.then((image) => setFileUrl(URL.createObjectURL(image)));
	}, []);


	return (
		<div onClick={routeToAdvertisementView} className={styles.advertisement} style={{background: advertisement.isPromoted ? '#FB8122' : '#403E58'}}>
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
			<img className={styles.advertisementImage} src={fileUrl} alt='Preview image'/>
		</div>
	);
};

export default AdvertisementSearch;