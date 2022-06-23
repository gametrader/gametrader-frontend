import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from '../advertisement/Advertisement.module.scss';
import {useNavigate} from 'react-router-dom';
import {AdvertisementModel} from '../../models/AdvertisementModel';
import advertisementService from '../../services/AdvertisementService';



const Advertisement: FunctionComponent<{ advertisement: AdvertisementModel }> = ({advertisement}) => {
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
		<div className={'' + styles.advertisement} onClick={routeToAdvertisementView}>
			<img className={'' + styles.previewImage} src={fileUrl} onClick={() => navigate('/')} alt='Preview image'/>
			<div className={'' + styles.content}>
				<div>
					<h3 className={'' + styles.title}>
						{advertisement.title}
					</h3>

					<h4 className={'' + styles.localization}>
						{advertisement.localization}
					</h4>
				</div>
				<p>{advertisement.price}zł</p>
			</div>
		</div>
	);
};

export default Advertisement;