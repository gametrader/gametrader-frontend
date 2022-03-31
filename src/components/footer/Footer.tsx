import React from 'react';
import styles from "../footer/Footer.module.scss";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/gametrader-logo-version-1.png";


const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className={styles.gtFooter}>
            <div className={"gt-container " + styles.footer}>

                <div className={styles.leftSection}>
                    <button type="button" className={styles.button + " btn gt-btn-primary"}
                            onClick={() => navigate('/Help')}>
                        Masz problem?
                    </button>
                </div>

                <div className={styles.centerSection}>
                    <p className={styles.copyright}>GameTrader 2022</p>
                </div>

                <div className={styles.rightSection}>
                    <button type="button" className={styles.button + " btn gt-btn-primary"}
                            onClick={() => navigate('/Contact')}>
                        Kontakt
                    </button>
                    <button type="button" className={styles.button + " btn gt-btn-primary"}
                            onClick={() => navigate('/AboutUs')}>
                        O nas
                    </button>
                </div>

            </div>
        </footer>
    );
}

export default Footer;