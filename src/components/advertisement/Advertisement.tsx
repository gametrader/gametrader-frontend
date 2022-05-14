import React from 'react';
import styles from '../advertisement/Advertisement.module.scss';
import {useNavigate} from 'react-router-dom';
import example from "../../assets/debil.jpg";


const Advertisement = () => {
 const navigate = useNavigate();
	return (
		<div className={'' + styles.advertisement}>
			<img className={'' + styles.previewImage} src={example} onClick={ () => navigate('/')}  alt="Preview image"/>
			<div className={'' + styles.content}>
				<div>
					<h3 className={'' + styles.title}>
						Tytuł
					</h3>

					<h4 className={'' + styles.localization}>
						Lokalizacja
					</h4>
				</div>
				<p>999zł</p>
			</div>
		</div>
	);
};

export default Advertisement;