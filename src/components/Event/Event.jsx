import './Event.css'
import React from "react";
import Carousel from '../Carousel/Carousel'
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import sectionWrapper from '../../utils/sectionWrapper'

import slide_image_1 from '../../assets/images/event posters/TECHLOCK HOLMES.png';
import slide_image_2 from '../../assets/images/event posters/AI ALCHEMY.png';
import slide_image_3 from '../../assets/images/event posters/KIMI NO CODE.png';
import slide_image_4 from '../../assets/images/event posters/FUSION FORUM.png';
import slide_image_5 from '../../assets/images/event posters/ENIGMA FEST.png';
import slide_image_6 from '../../assets/images/event posters/INTELLEXPO.png';
import slide_image_7 from '../../assets/images/event posters/IMPROMPTO.png';
import slide_image_8 from '../../assets/images/event posters/CRYPTIC CONUNDRUMS.png';
import slide_image_9 from '../../assets/images/event posters/MANIFESTO MATRIX.png';

const Event = ({ navigate }) => {

    const technicalEvent = [<img src={slide_image_1} alt="slide_image" className='swiper-slide_img' />, 
            <img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, 
            <img src={slide_image_3} alt="slide_image" className='swiper-slide_img' />, 
            <img src={slide_image_4} alt="slide_image" className='swiper-slide_img' />, 
            <img src={slide_image_5} alt="slide_image" className='swiper-slide_img' />,
            <img src={slide_image_6} alt="slide_image" className='swiper-slide_img' />,
            <img src={slide_image_7} alt="slide_image" className='swiper-slide_img' />,
            <img src={slide_image_8} alt="slide_image" className='swiper-slide_img' />,
            <img src={slide_image_9} alt="slide_image" className='swiper-slide_img' />,]

    const handleRegisterClick = () => {
        // Navigate to google.com
        window.location.href = 'https://forms.gle/9y6FbowCqLyTmb8j7';
    };

    return (
        <div className='event' id='event'>
            <div className='event__container'>
                <motion.h2 variants={fadeIn("right", "ease", 0, 1)} className='event__sub__title'>Events</motion.h2>
                <Carousel elements={technicalEvent} onClick={handleRegisterClick} />
            </div>
        </div>
    )
}

export default Event