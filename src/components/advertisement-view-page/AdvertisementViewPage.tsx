import React from 'react';
import styles from './AdvertisementViewPage.module.scss';
import example from '../../assets/sample.jpg';

import {useParams} from 'react-router-dom';


const AdvertisementViewPage = () => {
	const params = useParams();
	return (
		<>
			<div className={'gt-container '}>
				<div className={'' + styles.header}>
					<h2>TYTUL OGLOSZENIA</h2>
				</div>

				<ul className={styles.imageContainer}>
					<li className={'chevron'}>
						<i className={'fa fa-chevron-left'}/>
					</li>

					<li style={{width: '100%'}}>
						<img src={example}/>
					</li>

					<li className={'chevron'}>
						<i className={'fa fa-chevron-right'}/>
					</li>
				</ul>


				<div className={'' + styles.infoContainer}>
					<p className={'' + styles.price}>
						22zł
					</p>
					<div className={'' + styles.description}>
						<h3>OPIS</h3>
						<p>
							Witam, na sprzedaż mam 2 książki, są to:

							1.Wędrówki po Lubelszczyźnie Leona Wyszczółkowskiego. Katalog wystawy z okazji 100 lecia
							Muzeum Lubelskiego oraz 70 rocznicy śmierci artysty, książka z dziełami.

							2. LUBLIN. Książka z 1956r z powojennymi zdjęciami stolicy Lubelszczyzny. W kolorze czarno
							białym, z uwagi na wiek trochę pożółkła.

							Książki w stanie bardzo dobrym, szczególnie album Wyszczółkowskiego.

							Zapraszam!
						</p>
					</div>
				</div>


			</div>
		</>
	);
};


export default AdvertisementViewPage;