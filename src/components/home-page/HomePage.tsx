import React from 'react';
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.text}>
            HomePage<br></br>
            Running instance: {process.env.REACT_APP_ENVIROMENT}
            <div>
                <button type="button" className="btn gt-btn-primary">Primary</button>
                <button type="button" className="btn gt-btn-secondary">Secondary</button>
            </div>
        </div>
    );
};

export default HomePage;
