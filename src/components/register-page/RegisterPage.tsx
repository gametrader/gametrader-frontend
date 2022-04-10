import React from 'react';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
	return (
		<div className={styles.gtRegisterPage}>
			<header>
				<div className={'gt-container '}>
					<h1 className={'gt-vt-font '}>Rejestracja</h1>
				</div>
			</header>
			<div className={'gt-container '}>
				<form>
					<div className={styles.row}>
						<label htmlFor={'userName'}>Nazwa użytkownika</label>
						<input type="text" name="userName" />
					</div>

					<div className={styles.row}>
						<label htmlFor={'password'}>Hasło</label>
						<input type="text" name="password" />
					</div>

					<div className={styles.row}>
						<label htmlFor={'repeatedPassword'}>Powtórz hasło</label>
						<input type="text" name="repeatedPassword" />
					</div>

					<div className={styles.row}>
						<label htmlFor={'email'}>Adres e-mail</label>
						<input type="text" name="email" />
					</div>

					<div className={styles.row}>
						<label htmlFor={'birthDate'}>Data urodzenia</label>
						<input type="date" name="birthDate" />
					</div>

					<div className={styles.row}>
						<label htmlFor={'gender'}>Płeć</label>
						<select name="gender">
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">other</option>
						</select>
					</div>

					<div className={styles.row}>
						<p className={styles.info}>Klikając przycisk "Zarejestruj się" akceptujesz nasz regulamin</p>
					</div>

					<div className={styles.row}>
						<input className={'gt-vt-font btn gt-btn-secondary ' + styles.registerBtn} type="submit" value="Zarejestruj się" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
