import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import MyContainer from "../Components/MyContainer";
import { useAuth } from "../Hooks/useAuth";
import Spinner from "../Components/Spinner";
import ScrollToTop from "../Components/ScrollToTop";

const HomeLayout = () => {
  const { loader } = useAuth();
  if (loader) {
    return (
      <Spinner
        className={"w-screen h-screen flex items-center justify-center"}
      />
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <header className="bg-primary/10 backdrop-blur-md shadow-sm z-10 sticky top-0 z-50">
        <Navbar />
      </header>
      <MyContainer className="grow py-7 flex flex-col">
        <main className="grow flex flex-col">
          <Outlet />
        </main>
      </MyContainer>
      <footer className="bg-primary/20">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
