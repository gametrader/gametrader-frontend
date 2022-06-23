import React, {useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/gametrader-logo-version-1.png';
import styles from '../header/Header.module.scss';
import authService from '../../auth/AuthService';

const Header = () => {
	const navigate = useNavigate();

	const [, forceUpdate] = useReducer(x => x + 1, 0);
	const handleLogout = () => {
		authService.deleteJWTToken();
		authService.logout();
		navigate('/login');
		forceUpdate();
	};

	return (
		<header className={'navbar sticky-top ' + styles.gtHeader}>
			<div className={'container ' + styles.headerWrapper}>

				<div className={'row ' + styles.header}>

					<div className={'col-xs col-sm-7 col-md-7 col-lg-6 col-xl-6 ' + styles.leftSection}>
						<img className={'' + styles.logo} src={logo} onClick={() => navigate('/')} alt="App logo"/>
						<p className={'' + styles.motto + ' gt-vt-font'}>SPRZEDAJ SPRZĘT<br></br>NIE KOLEGÓW</p>
					</div>

					<ul className={'col-xs col-sm-5 col-md-5 col-lg-6 col-xl-6 ' + styles.rightSection}>
						{/* Add aditional buttons here if you want them to the left side */}
						{/*Być może tę ikonę powinniśmy umieścić w <button></button> bez styli*/}

						<li onClick={() => navigate('/add-advertisement')}
							style={!authService.getJWTToken() ? {visibility: "hidden"} : {}}>
							<i className={'fa fa-bars'}/>
							Dodaj
						</li>
						<li onClick={() => navigate('/')} style={!authService.getJWTToken() ? {visibility: "hidden"} : {}}>
							<i className={'fa fa-bars'}/>
							<a href="/">Wiadomości</a>
						</li>
						<li onClick={() => navigate('/')} style={!authService.getJWTToken() ? {visibility: "hidden"} : {}}>
							<i className={'fa fa-bars'}/>
							<a href="/">Konto</a>
						</li>
						{!authService.getJWTToken() ?
							<li onClick={() => navigate('/login')}>
								<button type="button" className="btn gt-btn-primary">Login</button>
							</li> : null
						}
						{!authService.getJWTToken() ?
							<li onClick={() => navigate('/register')}>
								<button type="button" className="btn gt-btn-secondary">Register</button>
							</li> : null
						}
						{authService.getJWTToken() ?
							<li onClick={handleLogout}>
								<button type="button" className="btn gt-btn-secondary">Logout</button>
							</li> : null
						}
					</ul>

				</div>
			</div>
		</header>
	);
};

export default Header;