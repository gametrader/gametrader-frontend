import React from 'react';
import styles from "../footer/Footer.module.scss";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/gametrader-logo-version-1.png";


const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className={"" + styles.gtFooter}>
            <div className={"container " + styles.footerWrapper}>
                <div className={"row " + styles.footer}>
                    <div className={"col-xs col-sm-4 col-md-4 col-lg-4 col-xl-4 " + styles.leftSection}>
                        <button type="button" className={styles.button + " btn gt-btn-primary"}
                                onClick={() => navigate('/Help')}>
                            Masz problem?
                        </button>
                    </div>

                    <div className={"col-xs col-sm-4 col-md-4 col-lg-4 col-xl-4 " + styles.centerSection}>
                        <p className={styles.copyright}>GameTrader 2022</p>
                    </div>
                    <div className={"col-xs col-sm-4 col-md-4 col-lg-4 col-xl-4 " + styles.xd}>
                        <div className={styles.rightSection}>
                            <button type="button" className={styles.button + " btn gt-btn-primary"}
                                    onClick={() => navigate('/Contact')}>
                                Kontakt
                            </button>
                        </div>
                        <div className={styles.rightSection}>
                            <button type="button" className={styles.button + " btn gt-btn-primary"}
                                    onClick={() => navigate('/AboutUs')}>
                                O nas
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    // <nav className={'navbar sticky-top ' + styles.gtHeader}>
    //     <div className={'container ' + styles.headerWrapper}>
    //
    //         <div className={"row " + styles.header}>
    //
    //             <div className={"col-xs col-sm-7 col-md-7 col-lg-6 col-xl-4 " + styles.leftSection}>
    //                 <img className={"" + styles.logo} src={logo} onClick={ () => navigate('/')}  alt="App logo"/>
    //                 <p className={"" + styles.motto + " gt-vt-font"}>SPRZEDAJ SPRZĘT<br></br>NIE KOLEGÓW</p>
    //             </div>
    //
    //             <ul className={"col-xs col-sm-5 col-md-5 col-lg-4 col-xl-4 " + styles.rightSection}>
    //                 {/* Add aditional buttons here if you want them to the left side */}
    //                 {/*Być może tę ikonę powinniśmy umieścić w <button></button> bez styli*/}
    //                 <li onClick={ () => navigate('/')}>
    //                     <i className={"fa fa-bars"}/>
    //                     <a>Dodaj</a>
    //                 </li>
    //                 <li onClick={ () => navigate('/')}>
    //                     <i className={"fa fa-bars"}/>
    //                     <a>Wiadomości</a>
    //                 </li>
    //                 <li onClick={ () => navigate('/')}>
    //                     <i className={"fa fa-bars"}/>
    //                     <a>Konto</a>
    //                 </li>
    //             </ul>
    //
    //         </div>
    //     </div>
    // </nav>
    );
}

export default Footer;