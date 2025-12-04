import React from 'react';
import MyContainer from '../Components/MyContainer';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Components/ScrollToTop';

const AuthLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <ScrollToTop/>
            <header className='bg-primary/10 backdrop-blur-md shadow-sm z-10'>
                <Navbar/>
            </header>
            <MyContainer className='grow py-4'>
            <main>
                <Outlet/>                
            </main>
            </MyContainer>
            <footer className='bg-primary/20'>
            <Footer/>
            </footer>

        </div>
    );
};

export default AuthLayout;