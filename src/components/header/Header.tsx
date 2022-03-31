import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/gametrader-logo-version-1.png";
import styles from "../header/Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={'navbar sticky-top ' + styles.gtHeader}>
            <div className={'container ' + styles.headerWrapper}>

                <div className={"row " + styles.header}>

                    <div className={"col-xs col-sm-7 col-md-7 col-lg-6 col-xl-6 " + styles.leftSection}>
                        <img className={"" + styles.logo} src={logo} onClick={ () => navigate('/')}  alt="App logo"/>
                        <p className={"" + styles.motto + " gt-vt-font"}>SPRZEDAJ SPRZĘT<br></br>NIE KOLEGÓW</p>
                    </div>

                    <ul className={"col-xs col-sm-5 col-md-5 col-lg-6 col-xl-6 " + styles.rightSection}>
                        {/* Add aditional buttons here if you want them to the left side */}
                        {/*Być może tę ikonę powinniśmy umieścić w <button></button> bez styli*/}
                        <li onClick={ () => navigate('/')}>
                            <i className={"fa fa-bars"}/>
                            <a href="/">Dodaj</a>
                        </li>
                        <li onClick={ () => navigate('/')}>
                            <i className={"fa fa-bars"}/>
                            <a href="/">Wiadomości</a>
                        </li>
                        <li onClick={ () => navigate('/')}>
                            <i className={"fa fa-bars"}/>
                            <a href="/">Konto</a>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    );
}

export default Header;