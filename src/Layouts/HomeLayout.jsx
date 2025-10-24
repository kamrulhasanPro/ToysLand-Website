import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import MyContainer from '../Components/MyContainer';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-secondary/20 backdrop-blur-md shadow-sm'>
                <Navbar/>
            </header>
            <MyContainer className='grow py-4'>
            <main>
                <Outlet/>
            </main>
            </MyContainer>
            <footer className='bg-secondary/20'>
            <Footer/>
            </footer>

        </div>
    );
};

export default HomeLayout;