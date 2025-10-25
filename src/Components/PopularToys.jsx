import React from 'react';
import ToysCard from './ToysCard';
import { useAuth } from '../Hooks/useAuth';

const PopularToys = () => {
    const {toysData} = useAuth()
    const popularToys = toysData.filter((toys,index) => (index % 4) == 0)
    console.log(popularToys);
    return (
        <section>
            <p className='text-secondary text-3xl font-semibold border-b-2 inline-block border-primary/20 hover:border-primary/50 transition-colors ease-in-out pb-1 cursor-default'>Popular Toys</p>

            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-7'>
            {
                popularToys.map(toys => <ToysCard toys={toys}/>)
            }
            </div>
        </section>
    );
};

export default PopularToys;