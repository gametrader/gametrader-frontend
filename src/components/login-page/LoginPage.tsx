import React from 'react';
import styles from './LoginPage.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginRequest } from '../../auth/models/LoginRequest';
import authService from '../../auth/AuthService';

const LoginPage = () => {
	const { register, formState: { errors }, handleSubmit } = useForm<LoginRequest>();
	const onLoginSubmit: SubmitHandler<LoginRequest> = (data: LoginRequest) => {
		console.log(data);
		authService.login(data).then(
			() => {
				// TODO 
			},
			() => {
				// TODO Handle 400 responses from backend
			}
		);
	};

	return (
		<div className={styles.gtLoginPage}>
			<header>
				<div className={'gt-container '}>
					<h1 className={'gt-vt-font '}>Logowanie</h1>
				</div>
			</header>
			<div className={'gt-container ' + styles.container}>
				<form onSubmit={handleSubmit(onLoginSubmit)}>
					<div className={styles.row}>
						<label htmlFor={'userName'}>Nazwa użytkownika</label>
						<div className={styles.inputContainer}>
							<input type="text" name="userName" {...register('username', { required: true })} />
							<div className={styles.warning} style={{ 'visibility': errors.username ? 'visible' : 'hidden' }}>
								<i className={'fa fa-exclamation-circle'}/>
								<p>
                                    Nazwa użytkownika jest wymagana.
								</p>
							</div>
						</div>
					</div>

					<div className={styles.row}>
						<label htmlFor={'password'}>Hasło</label>
						<div className={styles.inputContainer}>
							<input type="text" name="password" {...register('password', { required: true })} />
							<div className={styles.warning} style={{ 'visibility': errors.password ? 'visible' : 'hidden' }}>
								<i className={'fa fa-exclamation-circle'}/>
								<p>
                                    Hasło jest wymagane.
								</p>
							</div>
						</div>
					</div>

					<div className={styles.row}>
						<input className={'gt-vt-font btn gt-btn-secondary ' + styles.loginBtn} type="submit" value="Zaloguj się" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
