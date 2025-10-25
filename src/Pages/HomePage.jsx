import React from 'react';
import ImageSwiper from '../Components/ImageSwiper';
import PopularToys from '../Components/PopularToys';
import RemoteControlToys from '../Components/RemoteControlToys';

const HomePage = () => {
    return (
        <div className='space-y-10'>
            <ImageSwiper/>
            <PopularToys/>
            <RemoteControlToys/>
        </div>
    );
};

export default HomePage;