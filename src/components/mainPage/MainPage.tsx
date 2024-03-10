import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import "./_mainPage.scss";
import { Hero } from "./Hero";

const MainPage = () => {
    useEffect(() => {
        const interBubble =
            document.querySelector<HTMLDivElement>(".interactive")!;
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(
                curX
            )}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(() => {
                move();
            });
        }

        window.addEventListener("mousemove", (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const control = useAnimation();
    useEffect(() => {
        if (isInView) {
            control.start("visible");
        }
    }, [isInView]);

    return (
        <>
            <div className="navbar">
                {/* navbar items */}
                <div className="logoBox">Logo</div>
                <div className="loggedIn" /* hidden */>
                    <div className="accountBox">Account</div>
                    <FiLogOut className="icon" size={40} />
                </div>
                <div className="loggedOut" hidden>
                    <div className="loginBox">
                        <button className="loginBtn">Bejelentkezés</button>
                    </div>
                    <div className="registerBox">
                        <button className="registerBtn">Regisztráció</button>
                    </div>
                </div>
            </div>
            <Hero />
            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive"></div>
                </div>
            </div>
            <div ref={ref} className="container1">
                <motion.div
                    className="cards"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={control}
                    transition={{ duration: 1 }}
                >
                    <div className="col1">
                        <h2>Blabla</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis ab, quod repellendus aliquam beatae perspiciatis nihil obcaecati quia amet itaque deserunt aspernatur, enim nulla facilis, fugiat deleniti rerum doloremque.</p>
                    </div>
                    <div className="col2">
                        <h2>Blabla</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, exercitationem. Expedita ducimus facere suscipit. Eaque recusandae est molestiae nobis atque cumque velit necessitatibus natus dolor. Itaque iste totam veniam est.</p>
                    </div>
                    <div className="col3">
                        <h2>Blabla</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere ab excepturi, odit molestias iure dicta, odio accusamus amet minima nam, explicabo ipsam et aut delectus illo ex placeat repudiandae.</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default MainPage;
