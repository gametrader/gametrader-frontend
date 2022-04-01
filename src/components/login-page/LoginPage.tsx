import React from 'react';
import styles from './LoginPage.module.scss'

const LoginPage = () => {
    return (
        <div className={styles.gtLoginPage}>
            <header>
                <div className={"gt-container "}>
                    <h1 className={"gt-vt-font "}>Logowanie</h1>
                </div>
            </header>
            <div className={"gt-container " + styles.container}>
                <form>
                    <div className={styles.row}>
                        <label htmlFor={"userName"}>Nazwa użytkownika</label>
                        <input type="text" name="userName" />
                    </div>

                    <div className={styles.row}>
                        <label htmlFor={"password"}>Hasło</label>
                        <input type="text" name="password" />
                    </div>

                    <div className={styles.row}>
                        <input className={"gt-vt-font btn gt-btn-secondary " + styles.loginBtn} type="submit" value="Zaloguj się" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
