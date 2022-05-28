import React from 'react';
import styles from './AddAdvertisementPage.module.scss';
import example from '../../assets/debil.jpg';

const AddAdvertisementPage = () => {
	return (
		<div className={'gt-container ' + styles.container}>
			<form className={styles.addAdvertisementForm}>
				<div className={styles.section}>
					<label htmlFor={'title'}><h3>Tytuł ogłoszenia</h3></label>
					<input type='text' name='title'/>

					<label htmlFor={'category'}><h3>Kategoria</h3></label>
					<select name='category' id='category'>
						<option value="Myszki">Myszki</option>
						<option value="Klawiatury">Klawiatury</option>
						<option value="Akcesoria">Akcesoria</option>
						<option value="Komputery">Komputer</option>
					</select>
				</div>

				<div className={styles.section}>
					<div className={styles.sectionHeader}>
						<h3>Zdjęcia</h3>

						<button onClick={(event) => {
							event.preventDefault();
							document.getElementById('getFile').click();
						}}>+
						</button>
						<input type='file' className={styles.addImageButton} id="getFile" multiple accept='image/*'/>
					</div>
					<div className={styles.sectionContainer}>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
						<img src={example}/>
					</div>
				</div>

				<div className={styles.section}>
					<label htmlFor={'description'}><h3>Opis ogłoszenia</h3></label>
					<textarea name='description' className={styles.descriptionField}></textarea>
				</div>

				<div className={styles.section}>
					<label htmlFor={'location'}><h3>Lokalizacja*</h3></label>
					<input type='text' name='location'/>

					<label htmlFor={'email'}><h3>Adres e-mail</h3></label>
					<input type='text' name='email'/>

					<label htmlFor={'telephone-number'}><h3>Numer telefonu</h3></label>
					<input type='text' name='location'/>
				</div>
				<div className={styles.buttonToRight}>
					<input
						className={'gt-vt-font btn gt-btn-primary ' + styles.loginBtn}
						type='submit'
						value='Dodaj ogłoszenie'
					/>
				</div>
			</form>
		</div>
	);
};

export default AddAdvertisementPage;
