import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./_Hero.scss";
import image from "../../assets/images/hero.png";

export const Hero = () => {
    const TEXTS = ["Tanárt", "Mentort", "Coachot"];
    const [currenctIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((index) => (index + 1) % TEXTS.length);
        }, 2000);
        return () => clearInterval(interval);
    });

    return (
        <div className="hero">
            <div className="textbox">
                <h1>Progressus.</h1>
                <p>
                    Találd meg a hozzád illő <span>{TEXTS[currenctIndex]}</span>
                </p>
                <p>és kezdj el fejlődni még ma!</p>
                <Link to="/registration">
                    <button className="cta-btn" role="button">
                        <span className="text">Kezdj ma!</span>
                    </button>
                </Link>
            </div>
            <div className="illustration">
                <img src={image} alt="illustration" />
            </div>
        </div>
    );
};
