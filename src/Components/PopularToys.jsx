import React from 'react';
import ToysCard from './ToysCard';

const PopularToys = () => {
    return (
        <section>
            <p className='text-secondary text-3xl font-semibold border-b-2 inline-block border-primary/20 hover:border-primary/50 transition-colors ease-in-out pb-1 cursor-default'>Popular Toys</p>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
            <ToysCard/>
            </div>
        </section>
    );
};

export default PopularToys;