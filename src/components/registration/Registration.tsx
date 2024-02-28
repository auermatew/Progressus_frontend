import React from "react";
import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PwInput from "../PwInput";
import "./_registration.scss";

const Registration = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("Nincs kiválasztva");
    return (
        <div className="container">
            <div className="register-box">
                <div className="wrapper">
                    <form action="">
                        <div className="pfpBox">
                            {image ? (
                                <img
                                    src={image}
                                    width={220}
                                    height={220}
                                    alt={fileName}
                                    id="profileImg"
                                />
                            ) : (
                                <MdAccountCircle
                                    color="#fff"
                                    size={240}
                                    id="profileIcon"
                                />
                            )}
                            <section className="fileRow">
                                <span>
                                    {fileName}
                                    <FaTrash
                                        className="icon trashIcon"
                                        size={25}
                                        onClick={() => {
                                            setImage(null);
                                            setFileName("Nincs kiválasztva");
                                        }}
                                    />
                                </span>
                            </section>
                            <label htmlFor="input-file" id="pfpLabel">
                                Profilkép feltöltése
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="input-file"
                                hidden
                                onChange={({ target: { files } }) => {
                                    files[0] && setFileName(files[0].name);
                                    if (files) {
                                        setImage(URL.createObjectURL(files[0]));
                                    }
                                }}
                            />
                        </div>
                        {/* <div className="input-box">
                            <input
                                type="text"
                                placeholder="Felhasználónév"
                                required
                            />
                            <FaUser className="icon" />
                        </div> */}
                        <div className="radioInputs">
                            <input
                                type="radio"
                                name="radioInp"
                                id="mentorInput"
                                hidden
                            />
                            <label
                                htmlFor="mentorInput"
                                className="mentorLabel"
                            >
                                <PiChalkboardTeacherFill className="pi" />
                                <span>Mentor</span>
                            </label>
                            <input
                                type="radio"
                                name="radioInp"
                                id="tanuloInput"
                                hidden
                            />
                            <label
                                htmlFor="tanuloInput"
                                className="tanuloLabel"
                            >
                                <PiStudentFill className="pi" />
                                <span>Tanuló</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="loginBox">
                <div className="wrapper">
                    <form action="">
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email cím"
                                required
                            />
                            <MdEmail className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Teljes név"
                                required
                            />
                            <FaIdCard className="icon" />
                        </div>
                        <div className="input-box">
                            <PwInput />
                        </div>
                        <div className="input-box">
                            <PwInput />
                        </div>
                        <div className="btnBox">
                            <button type="submit" className="btn">
                                Regisztrálás
                            </button>
                        </div>
                        <div className="register-link">
                            <p>
                                Már van profilod? <a href="#">Bejelentkezés</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
