import React, {FunctionComponent} from 'react';
import styles from '../advertisement/Advertisement.module.scss';
import {useNavigate} from 'react-router-dom';
import example from '../../assets/sample.jpg';
import {AdvertisementModel} from '../../models/AdvertisementModel';


const Advertisement: FunctionComponent<{ advertisement: AdvertisementModel }> = ({advertisement}) => {
	const navigate = useNavigate();

	const routeToAdvertisementView = () => {
		const path = `/view-advertisement/${advertisement.id}`;
		navigate(path);
	};

	return (
		<div className={'' + styles.advertisement} onClick={routeToAdvertisementView}>
			<img className={'' + styles.previewImage} src={example} onClick={() => navigate('/')} alt='Preview image'/>
			<div className={'' + styles.content}>
				<div>
					<h3 className={'' + styles.title}>
						{advertisement.title}
					</h3>

					<h4 className={'' + styles.localization}>
						{advertisement.location}
					</h4>
				</div>
				<p>{advertisement.price}zł</p>
			</div>
		</div>
	);
};

export default Advertisement;