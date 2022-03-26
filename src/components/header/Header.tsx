import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from "../../assets/gametrader-logo-version-1.png";
import styles from "../header/Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <div className={styles.container + " gt-margin-container"}>
                <img className={styles.logo} src={logo} alt="App logo"/>
                <p className={styles.motto + " gt-vt-font"}>SPRZEDAJ SPRZĘT<br></br>NIE KOLEGÓW</p>
                <button type="button" className={styles.button + " btn gt-btn-primary"}
                        onClick={() => navigate('/register')}>
                        Utwórz konto
                </button>
            </div>
        </div>
    );
}

export default Header;