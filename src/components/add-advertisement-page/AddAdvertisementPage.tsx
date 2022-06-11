import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './AddAdvertisementPage.module.scss';
import { CategoryModel } from '../../models/CategoryModel';
import advertisementCategoriesService from '../../services/AdvertisementCategoriesService';
import { ImageModel } from '../../models/ImageModel';

const AddAdvertisementPage = () => {
	const [categories, setCategories] = useState<CategoryModel[]>([]);
	const [image, setImage] = useState<ImageModel>(null);
	
	const addImage = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event);
		setImage({
			fileName: URL.createObjectURL(event.target.files[0])
		});
	};

	useEffect(() => {
		advertisementCategoriesService.getAdvertisementCategories().then((response) => {
			setCategories(response);
		});
	}, []);

	return (
		<>
			<header>
				<div className={'gt-container'}>
					<h1 className={'gt-vt-font'}>Dodaj ogłoszenie</h1>
				</div>
			</header>
			<div className='gt-container'>
				<form className={styles.addAdvertisementForm}>
					<div className={styles.section}>
						<label htmlFor={'title'}><h3>Tytuł ogłoszenia</h3></label>
						<input type='text' name='title' />

						<label htmlFor={'category'}><h3>Kategoria</h3></label>
						{/* <select name='category' id='category'>
							<option value="Myszki">Myszki</option>
							<option value="Klawiatury">Klawiatury</option>
							<option value="Akcesoria">Akcesoria</option>
							<option value="Komputery">Komputer</option>
						</select> */}
						<select className='form-select'>
							<option value={0}>Wybierz kategorię</option>
							{categories.map((category) => (
								<option key={category.id} value={category.id} >{category.name}</option>
							))}
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
							<input onChange={ (event) => addImage(event) } type='file' className={styles.addImageButton} id="getFile" accept='image/*'/>
						</div>
						<div className={styles.sectionContainer}>
							<img src={image ? image.fileName : ''}/>
						</div>
					</div>

					<div className={styles.section}>
						<label htmlFor={'description'}><h3>Opis ogłoszenia</h3></label>
						<textarea name='description' className={styles.descriptionField}></textarea>
					</div>

					<div className={styles.section}>
						<label htmlFor={'location'}><h3>Lokalizacja*</h3></label>
						<input type='text' name='location' />

						<label htmlFor={'email'}><h3>Adres e-mail</h3></label>
						<input type='text' name='email' />

						<label htmlFor={'telephone-number'}><h3>Numer telefonu</h3></label>
						<input type='text' name='location' />
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
		</>
	);
};

export default AddAdvertisementPage;
