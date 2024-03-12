import React from "react";
import "./_footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <h2>Kérdésed van?</h2>
            <p>Itt elérsz minket:</p>
            <a href="#" className="email">Progressus@gmail.com</a>
            <a href="#" className="phone">+36 30 123 4567</a>
            <p className="copyright">
                ©2024 -<span> Progressus ™</span>
            </p>
        </div>
    );
};

export default Footer;
