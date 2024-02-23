import './Hero.css'
import React, { useEffect, useRef } from "react";
import CountdownTimer from '../CountDown/CountdownTimer';
import Button from '../Button/Button';
import HeroCanvas from '../../canvas/Home'
import { motion } from 'framer-motion'
import { zoomIn } from '../../utils/motion';
import sectionWrapper from '../../utils/sectionWrapper'

// ... (imports)

const Hero = () => {
    const titleRef = useRef();

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
        let iterationMain = 0;

        interval = setInterval(() => {
            titleRef.current.innerText = titleRef.current.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iterationMain) {
                        return titleRef.current.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterationMain >= titleRef.current.dataset.value.length) {
                clearInterval(interval);
            }

            iterationMain += 1 / 3;
        }, 30);

        return () => clearInterval(interval);

    }, []);

    const handleRegisterClick = () => {
        // Navigate to google.com
        window.location.href = 'https://forms.gle/9y6FbowCqLyTmb8j7';
    };

    return (
        <div className="hero" id='hero'>
            {/* <HeroCanvas /> */}
            <div className="hero__container">
                <motion.h1 className='hero__title' whileInView={{ opacity: 1 }} variants={zoomIn(0, 1)} ref={titleRef} data-value="INNOVENTZZ'24">INNOVENTZZ'24</motion.h1>
                <CountdownTimer />
                <Button onClick={handleRegisterClick}>Register</Button>
            </div>
        </div>
    );
};

export default sectionWrapper(Hero, "about");
    