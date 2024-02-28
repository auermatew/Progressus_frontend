import React from "react";
import { FaUser } from "react-icons/fa";
import "./_login.scss";
import PwInput from "../PwInput";

const Login = () => {
    return (
        <div className="container">
            <div className="slogan">
                <div className="line" />
                <h1 className="title">
                    Találd meg a mentorod <br />
                    Lépj a következő szintre!
                </h1>
            </div>
            <div className="loginBox">
                <div className="wrapper">
                    <form action="">
                        <h1>Bejelentkezés</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Felhasználónév"
                                required
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <PwInput />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input
                                    type="checkbox"
                                    className="checkRemember"
                                />
                                Emlékezz rám
                            </label>
                            <a href="#">Elfelejtett jelszó?</a>
                        </div>
                        <div className="btnBox">
                            <button type="submit" className="btn">
                                Belépés
                            </button>
                        </div>
                        <div className="register-link">
                            <p>
                                Nincs profilod? <a href="#">Regisztrálás</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
