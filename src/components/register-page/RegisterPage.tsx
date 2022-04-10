import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import authService from '../../auth/AuthService';
import { RegisterRequest } from '../../auth/models/RegisterRequest';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm<RegisterRequest>(); 
    const onRegisterSubmit: SubmitHandler<RegisterRequest> = (data: RegisterRequest) => {
        console.log(data);
        authService.register(data).then(
            () => {
                // TODO Route user back to /login
            },
            () => {
                // TODO Handle 400 responses from backend
            }
        );
    };

    return (
        <div className={styles.gtRegisterPage}>
            <header>
                <div className={"gt-container "}>
                    <h1 className={"gt-vt-font "}>Rejestracja</h1>
                </div>
            </header>
            <div className={"gt-container "}>
                <form onSubmit={handleSubmit(onRegisterSubmit)}>
                    <div className={styles.row}>
                        <label htmlFor={"userName"}>Nazwa użytkownika</label>
                        <div className={styles.inputContainer}>
                            <input type="text" name="userName" {...register("username", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 20
                                    })}/>
                            { errors.username && <div className={styles.warning}>
                                <i className={"fa fa-exclamation-circle"}/>
                                <p>
                                    Nazwa użytkownika musi mieć długość 8-20 znaków
                                </p>
                            </div> }
                        </div>
                    </div>

                    <div className={styles.row}>
                        <label htmlFor={"password"}>Hasło</label>
                        <div className={styles.inputContainer}>
                            <input type="password" name="userName" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /.*\d.*/
                                })}/>
                            { errors.password && <div className={styles.warning} >
                                <i className={"fa fa-exclamation-circle"}/>
                                <p>
                                    Hasło musi mieć długość 8-20 znaków i zawierać przynajmniej jedną cyfrę.
                                </p>
                            </div> }
                        </div>
                    </div>

                    <div className={styles.row}>
                        <label htmlFor={"repeatedPassword"}>Powtórz hasło</label>
                        <div className={styles.inputContainer}>
                            <input type="password" name="userName" {...register("confirmPassword", {
                                    required: true,
                                    validate: (confirmPassword) => confirmPassword === watch("password") 
                                })}/>
                            { errors.confirmPassword && <div className={styles.warning}>
                                <i className={"fa fa-exclamation-circle"}/>
                                <p>
                                    Hasła się nie zgadzają.
                                </p>
                            </div>}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <label htmlFor={"email"}>Adres e-mail</label>
                        <div className={styles.inputContainer}>
                            <input type="email" name="email" {...register("email", {
                                    required: true,
                                    pattern: /\S+@\S+\.\S+/
                                })}/>
                            { errors.email && <div className={styles.warning}>
                                <i className={"fa fa-exclamation-circle"}/>
                                <p>
                                    Niepoprawny email.
                                </p>
                            </div> }
                        </div>
                    </div>

                    <div className={styles.row}>
                        <label htmlFor={"birthDate"}>Data urodzenia</label>
                        <div className={styles.inputContainer}>
                            <input type="date" name="birthDate" {...register("dateOfBirth", { required: true })} />
                            { errors.dateOfBirth && <div className={styles.warning}>
                                <i className={"fa fa-exclamation-circle"}/>
                                <p>
                                    Data urodzenia jest wymagana.
                                </p>
                            </div> }
                        </div>
                    </div>

                    <div className={styles.row}>
                        <label htmlFor={"gender"}>Płeć</label>
                        <div className={styles.inputContainer}>
                            <select name="gender" {...register("gender", { required: true })}>
                                <option value="male">Mężczyzna</option>
                                <option value="female">Kobieta</option>
                                <option value="other">Inne/nie chcę podawać</option>
                            </select>
                            { errors.gender && <div className={styles.warning}>
                                <i className={"fa fa-exclamation-circle"}/>
                                <p>
                                    Zaznacz jedną z opcji.
                                </p>
                            </div> }
                        </div>
                    </div>

                    <div className={styles.row}>
                        <p className={styles.info}>Klikając przycisk "Zarejestruj się" akceptujesz nasz regulamin</p>
                    </div>

                    <div className={styles.row}>
                        <input className={"gt-vt-font btn gt-btn-secondary " + styles.registerBtn} type="submit" value="Zarejestruj się" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
