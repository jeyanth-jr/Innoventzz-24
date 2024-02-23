import './About.css'
import React from "react";
import logo from '../../assets/logo.png'
import { textVariant, slideIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import sectionWrapper from '../../utils/sectionWrapper'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>

                <div className='about__card'>
                    <motion.div variants={slideIn("left", "ease", 0, 1)} className='about__card__img__container'>
                        <img src={logo} className='about__card__img' />
                    </motion.div>

                    <div className='about__card__sub'>
                        <motion.h3 className='about__card__title' variants={textVariant()}>INNOVENTZZ'24</motion.h3>
                        <motion.p className='about__card__para' variants={textVariant()}>
                            Welcome to Innoventzz, an intellectually stimulating symposium hosted by the Department of Artificial Intelligence and Machine Learning dynamically together with the Department of Artificial Intelligence and Data Science. Innoventzz is more than just a gathering; it's a celebration of the trailblazing advancements and limitless possibilities within the realms of AI, Machine Learning and Data Science. You are at the right place to flaunt your innovations and creativity. Gear up yourselves for a thought - provoking experience from INNOVENTZZ’24.

                            <br></br>
                            <br></br>
                            About us:
                            The department of Artificial Intelligence and Machine Learning was established at Rajalakshmi Engineering College in the year 2020. The growing demand for these technologies gave rise to the Department of Artificial Intelligence and Data Science in the year 2022. These emerging departments have proved that actions speak louder than words by bringing home tremendous achievements within a short span. The main motive of Rajalakshmi Engineering College is to encourage young minds in these evolving technologies. The esteemed Head of the Department Dr. K. Sekar along with the enthusiastic faculty members are the support system of these budding departments.
                        </motion.p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default sectionWrapper(About)