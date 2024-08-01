// src/components/Layout.jsx
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

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
    </>
    );
};