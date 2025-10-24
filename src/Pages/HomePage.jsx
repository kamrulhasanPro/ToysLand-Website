import React from 'react';
import ImageSwiper from '../Components/ImageSwiper';
import PopularToys from '../Components/PopularToys';

const HomePage = () => {
    return (
        <div className='space-y-10'>
            <ImageSwiper/>
            <PopularToys/>
        </div>
    );
};

export default HomePage;