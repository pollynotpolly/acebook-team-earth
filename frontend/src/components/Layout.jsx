
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


export const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    }, []);

    return (
    <>
        {isLoggedIn && <Navbar />}
        <div className="content">
        <Outlet />
        </div>
        <Footer/>
    </>
    );
};