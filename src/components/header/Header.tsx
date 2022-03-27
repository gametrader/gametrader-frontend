import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/gametrader-logo-version-1.png";
import styles from "../header/Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className={'navbar sticky-top ' + styles.gtHeader}>
            <div className={'container-fluid ' + styles.logoContainerWrapper}>
                <div className={styles.logoContainer} onClick={ () => navigate('/') }>
                    <img className={styles.logo} src={logo} alt="App logo"/>
                    <p className={styles.motto + " gt-vt-font"}>SPRZEDAJ SPRZĘT<br></br>NIE KOLEGÓW</p>
                </div>
                <div className= {styles.rightSection}>
                    {/* Add aditional buttons here if you want them to the left side */}
                    <button type="button" className={styles.button + " btn gt-btn-primary"}
                            onClick={() => navigate('/login')}>
                            Zaloguj się
                    </button>
                    <button type="button" className={styles.button + " btn gt-btn-primary"}
                            onClick={() => navigate('/register')}>
                            Utwórz konto
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;