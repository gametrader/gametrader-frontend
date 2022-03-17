import React from 'react';
import styles from './HomePage.module.scss'
import logo from './../../assets/gametrader-logo-version-1.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={logo} alt="App logo"/>
            </div>
            HomePage<br></br>
            Running instance: {process.env.REACT_APP_ENVIROMENT}
            <div>
                <button type="button" className="btn gt-btn-primary" onClick={() => navigate('/login')}>Login</button>
                <button type="button" className="btn gt-btn-secondary" onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
};

export default HomePage;
