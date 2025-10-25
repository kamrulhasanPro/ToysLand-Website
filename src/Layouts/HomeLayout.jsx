import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import MyContainer from '../Components/MyContainer';
import { useAuth } from '../Hooks/useAuth';
import Spinner from '../Components/Spinner';


const HomeLayout = () => {
    const {loader} = useAuth()
    // if(loader){
    //     return <Spinner/>
    // }

    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-secondary/20 backdrop-blur-md shadow-sm z-10'>
                <Navbar/>
            </header>
            <MyContainer className='grow py-4'>
            <main>
                {
                    loader ? <Spinner/> : <Outlet/>
                }
                
            </main>
            </MyContainer>
            <footer className='bg-secondary/20'>
            <Footer/>
            </footer>

        </div>
    );
};

export default HomeLayout;