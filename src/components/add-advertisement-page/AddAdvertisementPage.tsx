import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './AddAdvertisementPage.module.scss';
import { CategoryModel } from '../../models/CategoryModel';
import advertisementCategoriesService from '../../services/AdvertisementCategoriesService';
import { ImageModel } from '../../models/ImageModel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AdvertisementModel } from '../../models/AdvertisementModel';
import imageService from './../../services/AdvertisementService';
import { useNavigate } from 'react-router-dom';

const AddAdvertisementPage = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState<CategoryModel[]>([]);
	const [image, setImage] = useState<ImageModel>(null);
	const { register, handleSubmit } = useForm<AdvertisementModel>(); 
	
	const addImage = (event: ChangeEvent<HTMLInputElement>) => {
		setImage({
			fileName: URL.createObjectURL(event.target.files[0]),
			file: event.target.files[0]
		});
	};

	const onAdvertisementSubmit: SubmitHandler<AdvertisementModel> = async (data: AdvertisementModel) => {
		await imageService.addAdvertisement(data, image.file).then(
			(response) => {
				console.log(response);
				const path = `/view-advertisement/${response.id}`;
				navigate(path);
			},
			(error) => {
				console.log(error);
			}
		);
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
				<form className={styles.addAdvertisementForm} onSubmit={handleSubmit(onAdvertisementSubmit)}>
					<div className={styles.section}>
						<label htmlFor={'title'}><h3>Tytuł ogłoszenia</h3></label>
						<input type='text' name='title' {...register('title', {required: true})}/>
						<label htmlFor={'category'}><h3>Kategoria</h3></label>
						<select className='form-select' {...register('category.id', { required: true })}>
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
						<textarea name='description' className={styles.descriptionField} {...register('description', {required: true})}></textarea>
					</div>

					<div className={styles.section}>
						<label htmlFor={'location'}><h3>Lokalizacja*</h3></label>
						<input {...register('localization')} type='text' name='location' />

						<label htmlFor={'email'}><h3>Adres e-mail</h3></label>
						<input type='text' name='email' {...register('emailNumber', {required: true})}/>

						<label htmlFor={'telephone-number'}><h3>Numer telefonu</h3></label>
						<input type='text' name='location' {...register('phoneNumber', {required: true})}/>

						<label htmlFor={'telephone-number'}><h3>Cena</h3></label>
						<input type='text' name='price' {...register('price', {required: true})}/>
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
