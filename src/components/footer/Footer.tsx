import React from 'react';
import styles from "../footer/Footer.module.scss";
import {useNavigate} from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.footer}>
            <div className={styles.container + " gt-margin-container"}>
                <div className={styles.leftSection}>
                    <button type="button" className={styles.button + " btn gt-btn-primary"}
                            onClick={() => navigate('/Help')}>
                        Masz jakiś problem?
                    </button>
                </div>

                <div className={styles.centerSection}>
                    <p className={styles.copyright}>Copyright GameTrader 2022</p>
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
        </div>
    );
}

export default Footer;