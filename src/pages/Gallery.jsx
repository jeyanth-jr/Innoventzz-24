import './Gallery.css'
import React from "react";
import Gallery from '../components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';
import slide_image_2 from '../assets/images/img_2.webp';
import slide_image_4 from '../assets/images/img_4.webp';

const GalleryPage = () => {
    const navigate = useNavigate()

    return (
        <div className='galleryPage'>
            <div className='eventPage__back__container' onClick={() => {
                navigate(-1)
            }}>
                <h1 className='eventPage__back' >X </h1>
            </div>
            <Gallery page={true} >
                <img src={slide_image_2} alt="slide_image" className='gallery__image' />
                <img src={slide_image_2} alt="slide_image" className='gallery__image' />
                <img src={slide_image_4} alt="slide_image" className='gallery__image' />
                <img src={slide_image_4} alt="slide_image" className='gallery__image' />
                <img src={slide_image_2} alt="slide_image" className='gallery__image' />
                <img src={slide_image_2} alt="slide_image" className='gallery__image' />
                <img src={slide_image_2} alt="slide_image" className='gallery__image' />
                <img src={slide_image_4} alt="slide_image" className='gallery__image' />
                <img src={slide_image_4} alt="slide_image" className='gallery__image' />
                <img src={slide_image_2} alt="slide_image" className='gallery__image' />
            </Gallery>
        </div>

    )
}

export default GalleryPage